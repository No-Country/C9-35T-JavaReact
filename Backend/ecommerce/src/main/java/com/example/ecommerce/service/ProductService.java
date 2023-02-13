package com.example.ecommerce.service;

import com.example.ecommerce.dto.ProductDto;
import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.IProductRepository;
import com.example.ecommerce.service.interfaces.IProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.stream.Collectors;

public class ProductService implements IProductService {

    @Autowired
    private IProductRepository iProductRepository;

    @Autowired
    private Mapper mapper;

    public ResponseEntity<?> getProduct(Long id) {
        Product product = iProductRepository.findById(id).orElseThrow();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(product, ProductDto.class));
    }

    @Override
    public ResponseEntity<?> getProductsByCategory(Long id) {
        List<Product> products = iProductRepository.findByCategory_id(id);
        List<ProductDto> productsDto = products.stream().map(product -> mapper.getMapper().map(product, ProductDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(productsDto);
    }

    @Override
    public ResponseEntity<?> getAllProducts() {
        List<Product> products = iProductRepository.findAll();
        List<ProductDto> productsDto = products.stream().map(product -> mapper.getMapper().map(product, ProductDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(productsDto);
    }

    @Override
    public ResponseEntity<?> postProduct(Product product) {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iProductRepository.save(product));
    }

    @Override
    public ResponseEntity<?> patchProduct(Long id, Product product) {
        Product productToUpdate = iProductRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        productToUpdate.setDescription(product.getDescription());
        productToUpdate.setPrice(product.getPrice());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iProductRepository.save(productToUpdate));
    }

    @Override
    public ResponseEntity<?> deleteProduct(Long id) {
        Product productToDelete = iProductRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        iProductRepository.delete(productToDelete);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("Product deleted");
    }

}
