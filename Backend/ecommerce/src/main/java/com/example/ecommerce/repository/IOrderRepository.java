package com.example.ecommerce.repository;

import com.example.ecommerce.model.Order;
import com.example.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;


//@Repository
public interface IOrderRepository extends JpaRepository<Order, Long>
{
    List<Order> findByUser_id(Long id);
/*
    public boolean existsByDate(Date orderDate);
    public boolean existsByUser_id(Long id);
    public Optional<Order> findByDate(Date orderDate);
*/
}