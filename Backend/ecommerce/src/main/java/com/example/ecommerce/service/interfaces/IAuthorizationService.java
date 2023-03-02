package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.dto.LoginUserDto;
import com.example.ecommerce.dto.PatchUserDto;
import com.example.ecommerce.dto.ResponseUserDto;
import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.exception.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;

import java.sql.SQLIntegrityConstraintViolationException;

public interface IAuthorizationService {

    ResponseEntity<?> save(UserDto requestUserDto);

    ResponseEntity<?> saveAdmin(UserDto requestUserDto) throws SQLIntegrityConstraintViolationException;

    PatchUserDto update(PatchUserDto patchUserDto);

    UserDto findByEmail(String email) throws ResourceNotFoundException;

    UserDto getUserAuthenticated();

    ResponseEntity<?> login(LoginUserDto loginUser);


    ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response, Authentication auth);
}
