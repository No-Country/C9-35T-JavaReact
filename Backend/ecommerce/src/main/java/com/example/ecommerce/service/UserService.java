package com.example.ecommerce.service;

import com.example.ecommerce.config.CustomUserDetails;
import com.example.ecommerce.config.CustomUserDetailsService;
import com.example.ecommerce.dto.ResponseUserDto;
import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.exception.UserNotLoggedException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.IUserRepository;
import com.example.ecommerce.service.interfaces.IUserService;
import com.example.ecommerce.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service

public class UserService implements IUserService {

    @Autowired
    private IUserRepository iUserRepository;
    @Autowired
    private Mapper mapper;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Override
    public ResponseEntity<List<UserDto>> getAll() {
        List<User> users = iUserRepository.findAll();
        List<UserDto> usersDto = users.stream().map(user -> mapper.getMapper().map(user, UserDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(usersDto);
    }

    @Override
    public ResponseEntity<Object> getUser(Long id) {
        User user = iUserRepository.findById(id).orElseThrow();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(user, ResponseUserDto.class));
    }


    @Override
    public ResponseEntity<?> deleteUser(Long id, String token) {
        User userToDelete = iUserRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        iUserRepository.delete(userToDelete);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("User deleted");
    }

    @Override
    public ResponseEntity<?> updateUser(Long id, User user) {
        User userToUpdate = iUserRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userToUpdate.setEmail(user.getEmail());
        user.setSoftDelete(false);
        //modificar password
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iUserRepository.save(userToUpdate));
    }

}
