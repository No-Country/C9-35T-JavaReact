package com.example.ecommerce.controller;

import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.model.Order;
import com.example.ecommerce.model.Shipment;
import com.example.ecommerce.model.User;
import com.example.ecommerce.service.interfaces.IShipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/shipments")
public class ShipmentController {

    @Autowired
    private IShipmentService iShipmentService;

    @PostMapping("/user/{id}")
    public ResponseEntity<Shipment> postShipment(@RequestBody Order order, @PathVariable Long userId) {
        return iShipmentService.postShipment(order, userId);
    }

    @GetMapping("/")
    public ResponseEntity<List<Shipment>> getAllShipments() {
        return iShipmentService.getAllShipments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Shipment> getShipment(@PathVariable Long id) {
        return iShipmentService.getShipment(id);
    }
}
