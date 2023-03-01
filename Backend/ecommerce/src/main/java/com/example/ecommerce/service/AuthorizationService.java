package com.example.ecommerce.service;

import com.example.ecommerce.dto.AuthToken;
import com.example.ecommerce.dto.LoginUserDto;
import com.example.ecommerce.dto.ResponseUserDto;
import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.exception.ResourceFoundException;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.exception.UserNotAllowedException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Role;
import com.example.ecommerce.model.User;
import com.example.ecommerce.model.enums.RoleName;
import com.example.ecommerce.repository.IUserRepository;
import com.example.ecommerce.service.interfaces.IAuthorizationService;
import com.example.ecommerce.service.interfaces.IRoleService;
import com.example.ecommerce.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Currency;
import java.util.Date;
import java.util.Objects;

@Service
public class AuthorizationService implements IAuthorizationService {
    @Autowired
    private JwtUtil jwtTokenUtil;
    @Autowired
    private Mapper mapper;
    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IRoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;


    @Override
    public ResponseEntity<?> save(UserDto requestUserDto) {
        try {
            return createUser(requestUserDto, RoleName.ROLE_USER);
        } catch (ResourceFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> saveAdmin(UserDto requestUserDto) {
        try {
            return createUser(requestUserDto, RoleName.ROLE_ADMIN);
        } catch (ResourceFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    public ResponseUserDto rollbackSoftDelete(UserDto requestUserDto) {
        User user = userRepository.findByEmail(requestUserDto.getEmail());
        user.setSoftDelete(false);
        String token = this.authenticate(requestUserDto.getEmail(), requestUserDto.getPassword());
        ResponseUserDto responseUserDto = mapper.getMapper().map(userRepository.save(user), ResponseUserDto.class);
        responseUserDto.setToken(token);
        return responseUserDto;
    }

    public ResponseEntity<?> createNewUser(UserDto requestUserDto, RoleName roleName) {
        User user = mapper.getMapper().map(requestUserDto, User.class);
        user.setAvatar("https://unavatar.io/" + requestUserDto.getEmail());
        user.setPassword(passwordEncoder.encode(requestUserDto.getPassword()));
        try {
            Role role = roleService.findByName(roleName);
            user.setRole(role);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
        user.setCreationDate(new Date());
        User userSaved = userRepository.save(user);

        try {
            String token = this.authenticate(requestUserDto.getEmail(), requestUserDto.getPassword());

            ResponseUserDto responseUserDto = mapper.getMapper().map(userSaved, ResponseUserDto.class);
            responseUserDto.setToken(token);

            return ResponseEntity.status(HttpStatus.OK).body(responseUserDto);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }


    private String authenticate(String email, String password) throws AuthenticationException {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return jwtTokenUtil.create(authentication);
    }

    @Override
    public UserDto update(UserDto requestUserDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (!(Objects.equals(userRepository.findByEmail(auth.getName()).getId(), userRepository.findByEmail(requestUserDto.getEmail()).getId()))) {
            throw new AccessDeniedException("You can not modify another user´s details");
        }
        User user = userRepository.findByEmail(requestUserDto.getEmail());

        user.setUpdateDate(new Date());
        user.setPassword(passwordEncoder.encode(requestUserDto.getPassword()));
        user.setFirstName(requestUserDto.getFirstName());
        user.setLastName(requestUserDto.getLastName());

        User userUpdated = userRepository.save(user);

        return mapper.getMapper().map(userUpdated, UserDto.class);

    }

    @Override
    public UserDto findByEmail(String email) throws ResourceNotFoundException {
        if (!userRepository.existsByEmail(email)) {
            throw new ResourceNotFoundException("User not found");
        }
        User user = userRepository.findByEmail(email);
        return mapper.getMapper().map(user, UserDto.class);
    }

    @Override
    public UserDto getUserAuthenticated() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return mapper.getMapper().map(userRepository.findByEmail(email), UserDto.class);
    }

    @Override
    public ResponseEntity<?> login(LoginUserDto loginUser) {
        try {
            if (userRepository.existsByEmail(loginUser.getEmail())) {
                if (userRepository.findByEmail(loginUser.getEmail()).isSoftDelete()) {
                    throw new UserNotAllowedException("User is pending deletion");
                }
            } else {
                throw new ResourceNotFoundException("User not found");
            }
            String token = this.authenticate(loginUser.getEmail(), loginUser.getPassword());
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(new AuthToken(token));
        } catch (UserNotAllowedException | ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response, Authentication auth) {
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return ResponseEntity.status(HttpStatus.OK).body("Logged out successfully");
    }

    public ResponseEntity<?> createUser(UserDto requestUserDto, RoleName role) {
        if (userRepository.existsByEmail(requestUserDto.getEmail())) {
            if (!userRepository.findByEmail(requestUserDto.getEmail()).isSoftDelete()) {
                throw new ResourceFoundException("User email already exists");
            }
            return ResponseEntity.status(HttpStatus.OK).body(rollbackSoftDelete(requestUserDto));
        }
        return createNewUser(requestUserDto, role);
    }
}
