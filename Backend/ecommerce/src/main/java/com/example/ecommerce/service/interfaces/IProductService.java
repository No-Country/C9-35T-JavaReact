package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.model.Product;
import com.example.ecommerce.service.ProductService;
import org.springframework.http.ResponseEntity;

public interface IProductService {
    ResponseEntity<?> getAllProducts();

    ResponseEntity<?> getProduct(Long id);

    ResponseEntity<?> getProductByCategory(Long id);

    ResponseEntity<?> postProduct(Product product);

    ResponseEntity<?> patchProduct(Long id, Product product);

    ResponseEntity<?> deleteProduct(Long id);

}
