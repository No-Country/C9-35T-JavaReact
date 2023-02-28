package com.example.ecommerce.controller;

import com.example.ecommerce.dto.OfferDto;
import com.example.ecommerce.dto.ScoreDto;
import com.example.ecommerce.model.Offer;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.model.Score;
import com.example.ecommerce.service.interfaces.IProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private IProductService iProductService;

    @GetMapping("/")
    public ResponseEntity<?> getProducts() {
        return iProductService.getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {
        return iProductService.getProduct(id);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchProduct(@PathVariable Long id, @RequestBody Product product) {
        return iProductService.patchProduct(id, product);
    }

    @PostMapping("/")
    public ResponseEntity<?> postProduct(@RequestBody Product product) {
        return iProductService.postProduct(product);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        return iProductService.deleteProduct(id);
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<?> getProductsByCategory(@PathVariable Long id) {
        return iProductService.getProductsByCategory(id);
    }

    @PostMapping("/{productId}/offer")
    public ResponseEntity<?> postOffer(@RequestBody OfferDto offerDto, @PathVariable Long productId) {
        return iProductService.postOffer(offerDto, productId);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/offer/{productId}")
    public ResponseEntity<?> deleteOffer(@PathVariable Long productId) {
        return iProductService.deleteOffer(productId);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    @PostMapping("/{productId}/score")
    public ResponseEntity<?> postScore(@RequestBody ScoreDto scoreDto, @PathVariable Long productId, @RequestHeader("Authorization") String token) {
        return iProductService.postScore(scoreDto, productId, token);
    }
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    @PatchMapping("/{productId}/score")
    public ResponseEntity<?> patchScore(@RequestBody ScoreDto scoreDto, @PathVariable Long productId, @RequestHeader("Authorization") String token) {
        return iProductService.patchScore(scoreDto, productId, token);
    }

    @GetMapping("/search")
    public ResponseEntity<?> getProductBySearch(@RequestBody String search) {
        return iProductService.getProductsBySearch(search);
    }
}
