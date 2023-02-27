package com.example.ecommerce.dto;

import lombok.Data;

import java.util.Date;

@Data
public class OrderDto {

    private Date orderDate;

    private String paymentMethod;

    private Long userId;

    private String state;
}
