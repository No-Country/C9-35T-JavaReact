package com.example.ecommerce.service;

import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Image;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.IImageRepository;
import com.example.ecommerce.repository.IProductRepository;
import com.example.ecommerce.service.interfaces.IImageService;
import com.example.ecommerce.service.interfaces.IProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service

public class ImageService implements IImageService {

    @Autowired
    private Mapper mapper;

    @Autowired
    private IImageRepository iImageRepository;

    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public ResponseEntity<?> postImageToProduct(Long id, Image image) {
        Product product = iProductRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        image.setProduct(product);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iImageRepository.save(image));
    }
}
