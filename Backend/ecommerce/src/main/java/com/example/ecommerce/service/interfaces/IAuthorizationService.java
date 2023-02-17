package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.dto.LoginUserDto;
import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.exception.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;

import java.sql.SQLIntegrityConstraintViolationException;

public interface IAuthorizationService {

    UserDto save(UserDto requestUserDto);

    UserDto saveAdmin( UserDto requestUserDto) throws SQLIntegrityConstraintViolationException;

    UserDto update( UserDto requestUserDto);

    UserDto findByEmail(String email) throws ResourceNotFoundException;

    UserDto getUserAuthenticated();

    ResponseEntity<?> login(LoginUserDto loginUser);


    ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response, Authentication auth);
}
