package com.example.ecommerce.model;

import com.example.ecommerce.model.enums.OrderState;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "states")
public class State {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    @Enumerated(EnumType.STRING)
    private OrderState name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "creationDate")
    @CreationTimestamp
    private Date creationDate;

    @Column(name = "updateDate")
    @UpdateTimestamp
    private Date updateDate;


}
