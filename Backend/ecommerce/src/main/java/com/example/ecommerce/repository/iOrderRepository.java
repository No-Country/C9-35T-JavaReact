package com.example.ecommerce.repository;

import com.example.ecommerce.model.Order;
import java.util.Date;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Analia
 */
@Repository
public interface iOrderRepository  extends JpaRepository<Order, Long>
{
    public Optional<Order> findByOrderDate(Date orderDate);  
    public boolean existsByOrderDate(Date orderDate);
    @Override
    public boolean existsById(Long id);
}

