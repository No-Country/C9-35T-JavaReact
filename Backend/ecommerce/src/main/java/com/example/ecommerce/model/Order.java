package com.example.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.util.Date;
import java.util.Optional;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "Orders")
public class Order {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "paymentMethod")
    private String paymentMethod;

    @Column(name = "orderDate")
    private Date orderDate;

    @ManyToOne(cascade= {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH } )
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "creationDate")
    private Date creationDate;

    @Column(name = "updateDate")
    private Date updateDate;

    @Column(name = "softDelete")
    private boolean softDelete;


    public Order(String paymentMethod, Date orderDate, User user) {
        this.paymentMethod = paymentMethod;
        this.orderDate = orderDate;
        this.user = user;
        this.creationDate=orderDate;
        this.updateDate=orderDate;
        this.softDelete=false;
    }

    public Order(String paymentMethod, Date orderDate, Optional<User> user) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public String toString() {
        return "Order{" + "id=" + id + ", paymentMethod=" + paymentMethod + ", orderDate=" + orderDate + ", user=" + user + '}';
    }

}
