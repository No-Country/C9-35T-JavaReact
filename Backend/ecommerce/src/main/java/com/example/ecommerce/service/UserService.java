package com.example.ecommerce.service;

import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.IUserRepository;
import com.example.ecommerce.service.interfaces.IUserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service

public class UserService implements IUserService {

    @Autowired
    private IUserRepository iUserRepository;
    @Autowired
    private Mapper mapper;

    @Override
    public ResponseEntity<List<UserDto>> getAll() {
        List<User> users = iUserRepository.findAll();
        List<UserDto> usersDto = users.stream().map(user -> mapper.getMapper().map(user, UserDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(usersDto);
    }

    @Override
    public ResponseEntity<Object> getUser(Long id) {
        User user = iUserRepository.findById(id).orElseThrow();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(user, UserDto.class));
    }

    @Override
    public ResponseEntity<Object> postUser(User user) {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iUserRepository.save(user));
    }

    @Override
    public ResponseEntity<?> deleteUser(Long id) {
        User userToDelete = iUserRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        iUserRepository.delete(userToDelete);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("User deleted");

    }

    @Override
    public ResponseEntity<?> updateUser(Long id, User user) {
        User userToUpdate = iUserRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userToUpdate.setEmail(user.getEmail());
        //modificar la password
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iUserRepository.save(userToUpdate));
    }

}
