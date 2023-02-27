package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.dto.OfferDto;
import com.example.ecommerce.dto.ScoreDto;
import com.example.ecommerce.model.Offer;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.model.Score;
import com.example.ecommerce.service.ProductService;
import org.springframework.http.ResponseEntity;

public interface IProductService {
    ResponseEntity<?> getAllProducts();

    ResponseEntity<?> getProduct(Long id);

    ResponseEntity<?> getProductsByCategory(Long id);

    ResponseEntity<?> postProduct(Product product);

    ResponseEntity<?> patchProduct(Long id, Product product);

    ResponseEntity<?> deleteProduct(Long id);

    ResponseEntity<?> deleteOffer(Long offerId);

    ResponseEntity<?> postOffer(OfferDto offerDto, Long productId);

    ResponseEntity<?> patchScore(ScoreDto scoreDto, Long productId, String token);

    ResponseEntity<?> postScore(ScoreDto scoreDto, Long productId, String token);

    ResponseEntity<?> getProductsBySearch(String search);
}
