package com.example.ecommerce.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class ProductDto {

    private Double price;

    private String name;

    private String description;

    private String stock;

    private Double score;

    private String color;

}
