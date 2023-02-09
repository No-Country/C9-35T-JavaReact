package com.example.ecommerce.controller;

import com.example.ecommerce.model.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {
    @GetMapping("/")
    public ResponseEntity<?> getProducts() {
        return null;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {
        return null;
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchProduct(@PathVariable Long id, @RequestBody Product product) {
        return null;
    }

    @PostMapping("/")
    public ResponseEntity<?> postProduct(@RequestBody Product product) {
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        return null;
    }
}
