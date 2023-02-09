package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.model.User;
import org.springframework.http.ResponseEntity;

public interface IUserService {
    ResponseEntity<?> getAll();

    ResponseEntity<?> getUser(Long id);

    ResponseEntity<?> postUser(User user);

    ResponseEntity<?> deleteUser(Long id);

    ResponseEntity<?> updateUser(Long id, User user);

}
