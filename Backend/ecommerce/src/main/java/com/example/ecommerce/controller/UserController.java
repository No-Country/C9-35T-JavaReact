package com.example.ecommerce.controller;

import com.example.ecommerce.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")

public class UserController {

    @GetMapping("/")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.status(HttpStatus.OK).body("");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        return null;
    }

    @PostMapping("/")
    public ResponseEntity<?> postUser(@RequestBody User user) {
        return null;
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchUser(@RequestBody User user, @PathVariable Long id) {
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        return null;
    }
}
