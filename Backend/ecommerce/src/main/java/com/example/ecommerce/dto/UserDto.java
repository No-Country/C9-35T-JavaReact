package com.example.ecommerce.dto;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDto {

    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String address;

    private String country;

    private String province;

    private Long zipCode;

    private String city;

    private String phone;

    private String avatar;
}
