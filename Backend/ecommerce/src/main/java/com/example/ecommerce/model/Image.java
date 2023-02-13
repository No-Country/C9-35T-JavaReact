package com.example.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "dataBase64")
    private String dataBase64;

    @Column(name = "name")
    private String name;

    @Column(name = "isMain")
    private boolean isMain;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

}

