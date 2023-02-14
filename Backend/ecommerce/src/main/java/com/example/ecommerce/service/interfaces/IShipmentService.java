package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.model.Order;
import com.example.ecommerce.model.Shipment;
import com.example.ecommerce.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IShipmentService {
    ResponseEntity<Shipment> postShipment(Order order, Long userId);

    ResponseEntity<List<Shipment>> getAllShipments();

    ResponseEntity<Shipment> getShipment(Long id);
}
