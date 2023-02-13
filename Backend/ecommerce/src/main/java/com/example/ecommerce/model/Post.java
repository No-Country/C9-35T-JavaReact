package com.example.ecommerce.model;

import jakarta.persistence.Column;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

public class Post {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

    @OneToMany(mappedBy = "post")
    private Set<Review> reviews = new HashSet<>();

}
