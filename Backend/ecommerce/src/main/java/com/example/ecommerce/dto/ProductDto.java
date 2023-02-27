package com.example.ecommerce.dto;


import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductDto {

    private Double price;

    private String name;

    private String description;

    private Long stock;

    private String color;

    private CategoryDto category;

}
