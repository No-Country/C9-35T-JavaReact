package com.example.ecommerce.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Builder
@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "products")
public class Product {

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Double price;

    @Column(name = "description")
    private String description;

    @Column(name = "stock")
    private Long stock;

    @Column(name = "color")
    private String color;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "products")
    private Set<User> users = new HashSet<>();

    @OneToOne(mappedBy = "product")
    private Post post;

    @OneToMany(mappedBy = "product")
    private Set<Item> items = new HashSet<>();

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval=true)
    private Offer offer;

    @OneToMany(mappedBy = "product")
    private Set<Score> scores = new HashSet<>();
}
