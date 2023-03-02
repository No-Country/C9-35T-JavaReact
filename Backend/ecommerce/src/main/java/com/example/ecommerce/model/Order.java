package com.example.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "orders")
public class Order {
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "orderDate", nullable = false)
    @CreationTimestamp
    private Date orderDate;

    @Column(name = "updateDate")
    @UpdateTimestamp
    private Date updateDate;

    @Column(name = "paymentMethod")
    private String paymentMethod;

    @Column(name = "shipment_provider")
    private String shipmentProvider;

    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "items",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Set<Product> products = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
