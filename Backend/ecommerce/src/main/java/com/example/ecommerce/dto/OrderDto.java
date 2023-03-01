package com.example.ecommerce.dto;

import com.example.ecommerce.model.User;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class OrderDto {
    private Long id;

    private Date orderDate;

    private String paymentMethod;

    private User user;

    private String state;

}
