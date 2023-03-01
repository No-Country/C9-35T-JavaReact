package com.example.ecommerce.dto;

import lombok.Data;

@Data
public class ResponseUserDto {

    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String token;
    
}
