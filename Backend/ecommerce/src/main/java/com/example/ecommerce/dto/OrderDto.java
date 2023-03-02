package com.example.ecommerce.dto;

import com.example.ecommerce.model.Item;
import com.example.ecommerce.model.State;
import com.example.ecommerce.model.User;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Data
public class OrderDto {
    private Long id;

    private Date orderDate;

    private String paymentMethod;

    private User user;

    private State state;

    private Set<ItemDto> items;
    
    private String shipmentProvider;

}
