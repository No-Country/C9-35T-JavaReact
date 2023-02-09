package com.example.ecommerce.service;

import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.IProductRepository;
import com.example.ecommerce.service.interfaces.IProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public class ProductService  implements IProductService {

    @Autowired
    private IProductRepository iProductRepository;


    public ResponseEntity<?> getProduct(Long id) {
       return ResponseEntity.status(200).body("");
    }

    public ResponseEntity<?> getProductByCategory(Long id) {
        return null;
    }

    public ResponseEntity<?> getAllProducts() {
        return null;
    }

    public ResponseEntity<?> postProduct(Product product) {
        return null;
    }

    public ResponseEntity<?> patchProduct(Long id, Product product) {
        return null;
    }

    public ResponseEntity<?> deleteProduct(Long id) {
        return null;
    }

 }
