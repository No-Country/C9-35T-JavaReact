package com.example.ecommerce.service;

import com.example.ecommerce.dto.OrderDto;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Order;
import com.example.ecommerce.repository.IOrderRepository;
import com.example.ecommerce.service.interfaces.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class OrderService implements IOrderService {

    @Autowired
    private IOrderRepository iOrderRepository;

    @Autowired
    private Mapper mapper;

    public ResponseEntity<?> getOrder(Long id) {
        Order order = iOrderRepository.findById(id).orElseThrow();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(order, OrderDto.class));
    }

    @Override
    public ResponseEntity<?> getOrdersByUser(Long id) {
        List<Order> order = iOrderRepository.findByUser_id(id);
        List<OrderDto> ordersDto = order.stream().map(product -> mapper.getMapper().map(order, OrderDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(ordersDto);
    }


    @Override
    public ResponseEntity<?> getAllOrders() {
        List<Order> orders = iOrderRepository.findAll();
        List<OrderDto> productsDto = orders.stream().map(product -> mapper.getMapper().map(product, OrderDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(productsDto);
    }

    @Override
    public ResponseEntity<?> postOrder(Order order) {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iOrderRepository.save(order));
    }

    @Override
    public ResponseEntity<?> patchOrder(Long id,Order order) {
        Order orderToUpdate = iOrderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        orderToUpdate.setOrderDate(order.getOrderDate());
        orderToUpdate.setPaymentMethod(order.getPaymentMethod());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iOrderRepository.save(orderToUpdate));
    }

    @Override
    public ResponseEntity<?> deleteOrder(Long id) {
        Order orderToDelete = iOrderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        iOrderRepository.delete(orderToDelete);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("Order deleted");
    }

}
