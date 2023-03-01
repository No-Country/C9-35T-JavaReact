package com.example.ecommerce.controller;

import com.example.ecommerce.dto.OrderPatchDto;
import com.example.ecommerce.model.Order;
import com.example.ecommerce.service.interfaces.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")

public class OrderController {

    @Autowired
    private IOrderService iOrderService;

    @GetMapping("/")
    public ResponseEntity<?> getOrders() {
        return iOrderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable Long id) {
        return iOrderService.getOrder(id);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchOrder(@PathVariable Long id, @RequestBody OrderPatchDto order) {
        return iOrderService.patchOrder(id, order);
    }

    @PostMapping("/")
    public ResponseEntity<?> postOrder(@RequestBody Order order) {
        return iOrderService.postOrder(order);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
        return iOrderService.deleteOrder(id);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getOrdersByUser(@PathVariable Long id) {
        return iOrderService.getOrdersByUser(id);
    }
}
