package com.example.ecommerce.service;

import com.example.ecommerce.dto.AuthToken;
import com.example.ecommerce.dto.LoginUserDto;
import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.exception.UserNotAllowedException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.IUserRepository;
import com.example.ecommerce.service.interfaces.IAuthorizationService;
import com.example.ecommerce.service.interfaces.IRoleService;
import com.example.ecommerce.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;

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
    public UserDto save(UserDto requestUserDto) {

//        if (userRepository.existsByEmail(requestUserDto.getEmail())) {
//            if (!userRepository.findByEmail(requestUserDto.getEmail()).isSoftDelete()) {
//                throw new ResourceFoundException("User email already exists");
//            }
//            User user = userRepository.findByEmail(requestUserDto.getEmail());
//            user.setSoftDelete(false);
//            String token = this.authenticated(requestUserDto);
//            UserDto responseUserDto = mapper.getMapper().map(userRepository.save(user), UserDto.class);
//            responseUserDto.setToken(token);
//            return responseUserDto;
//
//        }
//
//        User user = mapper.getMapper().map(requestUserDto, User.class);
//        user.setPassword(passwordEncoder.encode(requestUserDto.getPassword()));
//
//        Role role = roleService.findByName(RoleName.ROLE_USER);
//        user.setRole(role);
//        user.setCreationDate(new Date());
//        User userSaved = userRepository.save(user);
//
//        String token = this.authenticated(requestUserDto);
//
//        accountService.createAccount(new AccountCreateDto(Currency.ars), token);
//        accountService.createAccount(new AccountCreateDto(Currency.usd), token);
//
//        UserDto responseUserDto = mapper.getMapper().map(userSaved, ResponseUserDto.class);
//        responseUserDto.setToken(token);
//
//        return responseUserDto;
        return null;
    }

    @Override
    public UserDto saveAdmin(UserDto requestUserDto) throws SQLIntegrityConstraintViolationException {  /*Acordar exceptions*/

//        if (userRepository.existsByEmail(requestUserDto.getEmail())) {
//            throw new SQLIntegrityConstraintViolationException("User email already exists");
//        }
//
//        User user = mapper.getMapper().map(requestUserDto, User.class);
//        user.setPassword(passwordEncoder.encode(requestUserDto.getPassword()));
//
//        Role role = mapper.getMapper().map(roleService.findByName(RoleName.ROLE_ADMIN), Role.class);
//        user.setRole(role);
//        user.setCreationDate(new Date());
//        User userSaved = userRepository.save(user);
//
//        String token = this.authenticated(requestUserDto);
//
//        accountService.createAccount(new AccountCreateDto(Currency.ars), token);
//        accountService.createAccount(new AccountCreateDto(Currency.usd), token);
//
//        ResponseUserDto responseUserDto = mapper.getMapper().map(userSaved, ResponseUserDto.class);
//        responseUserDto.setToken(token);
//
//        return responseUserDto;
        return null;
    }

    private String authenticated(UserDto requestUserDto) {
//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(requestUserDto.getEmail(), requestUserDto.getPassword())
//        );
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        String token = jwtTokenUtil.create(authentication);
//        return token;
        return null;
    }

    @Override
    public UserDto update(UserDto requestUserDto) {
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//
//        if (!(Objects.equals(userRepository.findByEmail(auth.getName()).getId(), userRepository.findByEmail(requestUserDto.getEmail()).getId()))) {
//            throw new AccessDeniedException("You can not modify another user´s details");
//        }
//        User user = userRepository.findByEmail(requestUserDto.getEmail());
//
//        user.setUpdateDate(new Date());
//        user.setPassword(passwordEncoder.encode(requestUserDto.getPassword()));
//        user.setFirstName(requestUserDto.getFirstName());
//        user.setLastName(requestUserDto.getLastName());
//
//        User userUpdated = userRepository.save(user);
//
//        return mapper.getMapper().map(userUpdated, UserDto.class);
        return null;
    }

    @Override
    public UserDto findByEmail(String email) throws ResourceNotFoundException {
//        if (!userRepository.existsByEmail(email)) {
//            throw new ResourceNotFoundException("User not found");
//        }
//        User user = userRepository.findByEmail(email);
//
//        return mapper.getMapper().map(user, ResponseUserDto.class);
        return null;
    }

    @Override
    public UserDto getUserAuthenticated() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return mapper.getMapper().map(userRepository.findByEmail(email), UserDto.class);

    }

    @Override
    public ResponseEntity<?> login(LoginUserDto loginUser) {
        try {
            User user = userRepository.findByEmail(loginUser.getEmail());
            if (user.isSoftDelete()) {
                throw new UserNotAllowedException("User is pending deletion");
            }
            final Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginUser.getEmail(), loginUser.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);
            return ResponseEntity.ok(new AuthToken(jwtTokenUtil.create(authentication)));
        } catch (UserNotAllowedException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e);
        }
    }

    @Override
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response, Authentication auth) {
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return ResponseEntity.status(HttpStatus.OK).body("Loged out succesfully");
    }
}
