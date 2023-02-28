package com.example.ecommerce.controller;

import com.example.ecommerce.model.User;
import com.example.ecommerce.service.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService iUserService;

    @GetMapping("/")
    public ResponseEntity<?> getAllUsers() {
        return iUserService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        return iUserService.getUser(id);
    }

    @PostMapping("/")
    public ResponseEntity<?> postUser(@RequestBody User user) {
        return iUserService.postUser(user);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchUser(@RequestBody User user, @PathVariable Long id) {
        return iUserService.updateUser(id, user);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id, @RequestHeader(value = "Authorization") String token) {
        return iUserService.deleteUser(id, token);
    }
}
