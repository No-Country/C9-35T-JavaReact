package com.example.ecommerce.service;

import com.example.ecommerce.dto.OfferDto;
import com.example.ecommerce.dto.ProductDto;
import com.example.ecommerce.dto.ScoreDto;
import com.example.ecommerce.exception.OfferStillActiveException;
import com.example.ecommerce.exception.ResourceFoundException;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Offer;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.model.Score;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.IOfferRepository;
import com.example.ecommerce.repository.IProductRepository;
import com.example.ecommerce.repository.IScoreRepository;
import com.example.ecommerce.repository.IUserRepository;
import com.example.ecommerce.service.interfaces.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service

public class ProductService implements IProductService {

    @Autowired
    private IProductRepository iProductRepository;

    @Autowired
    private IOfferRepository iOfferRepository;
    @Autowired
    private Mapper mapper;

    @Autowired
    private IUserRepository iUserRepository;

    @Autowired
    private IScoreRepository iScoreRepository;

    public ResponseEntity<?> getProduct(Long id) {
        Product product = iProductRepository.findById(id).orElseThrow();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(product, ProductDto.class));
    }

    @Override
    public ResponseEntity<?> getProductsByCategory(Long id) {
        List<Product> products = iProductRepository.findByCategory_id(id);
        this.setOfferAvailability(products);
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

    @Override
    public ResponseEntity<?> deleteOffer(Long productId) {
        Product product = iProductRepository.findById(productId).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        try {
//            Offer offer = product.getOffer();
            product.setOffer(null);
            iProductRepository.save(product);
//            iOfferRepository.delete(offer);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Offer deleted");
        } catch (ResourceFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e);
        }
    }

    @Override
    public ResponseEntity<?> postOffer(OfferDto offerDto, Long productId) {
        try {
            Product product = iProductRepository.findById(productId).orElseThrow(() -> new ResourceNotFoundException("Product does not exist"));
            Offer currentOffer = product.getOffer();
            if (currentOffer != null && !currentOffer.getEndOffer().before(new Date())) {
                throw new OfferStillActiveException("Offer is still active, please remove before creating a new one.");
            }
            Offer newOffer = mapper.getMapper().map(offerDto, Offer.class);
            product.setOffer(newOffer);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(iProductRepository.save(product));
        } catch (OfferStillActiveException | ResourceFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> patchScore(ScoreDto scoreDto, Long productId, String token) {
        User user = iUserRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
        Score score = iScoreRepository.findByProduct_idAndUser_id(productId, user.getId());
        score.setQuality(scoreDto.getQuality());
        iScoreRepository.save(score);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Puntuación Guardada");
    }

    @Override
    public ResponseEntity<?> postScore(ScoreDto scoreDto, Long productId, String token) {
        User user = iUserRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
        Product product = iProductRepository.findById(productId).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        Score score = Score.builder().quality(scoreDto.getQuality()).product(product).user(user).build();
        iScoreRepository.save(score);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Puntuación guardada");
    }

    @Override
    public ResponseEntity<?> getProductsBySearch(String search) {
        List<Product> products = iProductRepository.findAllByNameContainingOrDescriptionContaining(search, search);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(products);
    }

    public void setOfferAvailability(List<Product> products) {
        for (Product product : products) {
            if (product.getOffer() != null && product.getOffer().getEndOffer().after(new Date())) {
                iOfferRepository.delete(product.getOffer());
            }
        }
    }


}
