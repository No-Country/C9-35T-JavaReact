package com.example.ecommerce.service;

import com.example.ecommerce.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public class UserService {


    @Autowired
    private IUserRepository iUserRepository;

    public ResponseEntity<?> getAll() {
        return null;
    }

    public ResponseEntity<?> getUser() {
        return null;
    }

    public ResponseEntity<?> postUser() {
        return null;
    }

    public ResponseEntity<?> deleteUser() {
        return null;
    }

    public ResponseEntity<?> updateUser() {
        return null;
    }

}
