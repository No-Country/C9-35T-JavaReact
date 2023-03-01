package com.example.ecommerce.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class CategoryDto {

    private Long id;

    private String description;

    private String name;
}
