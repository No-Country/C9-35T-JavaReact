package com.example.ecommerce.repository;

import com.example.ecommerce.model.Shipment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IShipmentRepository extends JpaRepository<Shipment, Long> {
    List<Shipment> findByUser_id(Long id);
}
