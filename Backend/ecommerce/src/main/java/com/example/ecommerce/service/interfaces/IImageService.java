package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.model.Image;
import org.springframework.http.ResponseEntity;

public interface IImageService {
    ResponseEntity<?> postImageToProduct(Long id, Image image);

    ResponseEntity<?> getProductImages(Long id);
}
