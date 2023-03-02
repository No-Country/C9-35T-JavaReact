package com.example.ecommerce.dto;

import com.example.ecommerce.model.Product;
import com.example.ecommerce.model.State;
import com.example.ecommerce.model.User;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class ResponseOrderDto {

    private Long id;

    private Date orderDate;

    private String paymentMethod;

    private User user;

    private State state;

    private Set<Product> products;

    private Set<ItemDto> items;

}
