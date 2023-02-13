package com.example.ecommerce.model;

import jakarta.persistence.*;

import java.util.Date;

@Table(name = "shipments")
public class Shipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "date")
    private Date date;

}
