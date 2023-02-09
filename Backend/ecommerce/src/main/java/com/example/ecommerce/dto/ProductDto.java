package com.example.ecommerce.dto;

import lombok.Data;

@Data
public class ProductDto {
    private Double price;

    private String name;

    private String description;

    private String stock;
}
