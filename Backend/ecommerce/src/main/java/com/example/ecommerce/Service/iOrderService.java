package com.example.ecommerce.Service;

import com.example.ecommerce.model.Order;
import com.example.ecommerce.repository.iOrderRepository;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Analia
 */
@Service
@Transactional
public class iOrderService {

    @Autowired
    iOrderRepository rOrder;

    public List<Order> getOrders() {
        return this.rOrder.findAll();
    }

    public Optional<Order> getOne(Long id) {
        return this.rOrder.findById(id);
    }

    public Optional<Order> getByOrderDate(Date orderDate) {
        return this.rOrder.findByOrderDate(orderDate);
    }

    public void saveOrder(Order order) {
        this.rOrder.save(order);
    }

    public void editOrder(Order order) {
    }

    public void deleteOrder(Long id) {
        this.rOrder.deleteById(id);
    }

    public boolean existsById(Long id) {
        return this.rOrder.existsById(id);
    }


}
