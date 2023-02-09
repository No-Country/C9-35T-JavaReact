package com.example.ecommerce.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor

public enum RoleName {
    ROLE_ADMIN("Administrator"),
    ROLE_USER("User");

    private String name;
}
