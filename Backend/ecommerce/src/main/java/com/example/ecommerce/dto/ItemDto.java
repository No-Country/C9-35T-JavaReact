package com.example.ecommerce.dto;

import com.example.ecommerce.model.Order;
import com.example.ecommerce.model.Product;
import lombok.Data;


@Data
public class ItemDto {

    private Long id;
    private Long amount;
    private Product product;

}
