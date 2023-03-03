package com.example.ecommerce.repository;

import com.example.ecommerce.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IImageRepository extends JpaRepository<Image, Long> {
    List<Image> findByProduct_id(Long productId);
}
