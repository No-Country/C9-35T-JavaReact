package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IUserService {
    ResponseEntity<List<UserDto>> getAll();

    ResponseEntity<?> getUser(Long id);

    ResponseEntity<?> postUser(User user);

    ResponseEntity<?> deleteUser(Long id,String token);

    ResponseEntity<?> updateUser(Long id, User user);

    User findLoggedUser(String token);
}
