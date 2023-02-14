package com.example.ecommerce.model;

import jakarta.persistence.*;

@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "amount")
    private Long amount;

    @OneToMany
    @Column(name = "product_id")
    private Product product;

    @ManyToOne
    @Column(name = "order_id")
    private Order order;

}
