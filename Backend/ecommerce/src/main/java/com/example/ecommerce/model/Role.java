package com.example.ecommerce.model;

import com.example.ecommerce.model.enums.RoleName;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name")
    @Enumerated(EnumType.STRING)
    private RoleName name;

    @Column(name = "description")
    private String description;

    @Column(name = "creationDate")
    @CreationTimestamp
    private Date creationDate;

    @Column(name = "updateDate")
    @UpdateTimestamp
    private Date updateDate;

}
