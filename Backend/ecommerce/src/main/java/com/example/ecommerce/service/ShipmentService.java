package com.example.ecommerce.service;

import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Order;
import com.example.ecommerce.model.Shipment;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.IShipmentRepository;
import com.example.ecommerce.repository.IUserRepository;
import com.example.ecommerce.service.interfaces.IShipmentService;
import com.example.ecommerce.service.interfaces.IUserService;
import io.micrometer.observation.annotation.Observed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service

public class ShipmentService implements IShipmentService {
    @Autowired
    private Mapper mapper;

    @Autowired
    private IShipmentRepository iShipmentRepository;

    @Autowired
    private IUserRepository iUserRepository;

    @Override
    public ResponseEntity<Shipment> postShipment(Order order, Long userId) {
        User user = iUserRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        Shipment shipment = new Shipment();
        shipment.setDate(new Date());
        shipment.setOrder(order);
        shipment.setUser(user);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iShipmentRepository.save(shipment));
    }

    @Override
    public ResponseEntity<List<Shipment>> getAllShipments() {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iShipmentRepository.findAll());
    }

    @Override
    public ResponseEntity<Shipment> getShipment(Long id) {
        Shipment shipment = iShipmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Shipment not found"));
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(shipment);
    }

    @Override
    public ResponseEntity<?> getUserShipments(Long id) {
        try {
            List<Shipment> userShipments = iShipmentRepository.findByUser_id(id);
            if (userShipments.isEmpty()) {
                throw new ResourceNotFoundException("User has no shipments");
            }
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(userShipments);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(e);
        }

    }
}
