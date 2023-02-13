package com.example.ecommerce.repository;

import com.example.ecommerce.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IImageRepository extends JpaRepository<Image, Long> {
}
