package com.example.ecommerce.controller;

import com.example.ecommerce.dto.LoginUserDto;
import com.example.ecommerce.dto.ResponseUserDto;
import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.service.interfaces.IAuthorizationService;
import com.example.ecommerce.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private IAuthorizationService iAuthorizationService;


    @PostMapping("/signUp")
    public ResponseEntity<?> signUp(@RequestBody UserDto userDto) throws SQLIntegrityConstraintViolationException {
        return ResponseEntity.status(HttpStatus.CREATED).body( iAuthorizationService.saveAdmin(userDto));
    }

    @PostMapping("/signIn")
    public ResponseEntity<?> signIn(@RequestBody LoginUserDto loginUser) throws AuthenticationException {
        return iAuthorizationService.login(loginUser);
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return iAuthorizationService.logout(request, response, auth);
    }
}
