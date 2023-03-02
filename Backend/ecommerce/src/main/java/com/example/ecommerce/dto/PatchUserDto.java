package com.example.ecommerce.dto;

import lombok.Data;
import lombok.Getter;

@Data

public class PatchUserDto {
    private String firstName;
    private String lastName;
    private String email;
    private String country;
    private String province;
    private Long zipCode;
    private String city;
    private String phone;
    private String address;
    private String password;
}
