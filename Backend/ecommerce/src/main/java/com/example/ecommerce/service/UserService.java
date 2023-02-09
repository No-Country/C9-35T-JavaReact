package com.example.ecommerce.service;

import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.IUserRepository;
import com.example.ecommerce.service.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public class UserService implements IUserService {


    @Autowired
    private IUserRepository iUserRepository;

    public ResponseEntity<?> getAll() {
        return null;
    }

    public ResponseEntity<?> getUser(Long id) {
        return null;
    }

    public ResponseEntity<?> postUser(User user) {
        return null;
    }

    public ResponseEntity<?> deleteUser(Long id) {
        return null;
    }

    public ResponseEntity<?> updateUser(Long id, User user) {
        return null;
    }

}
