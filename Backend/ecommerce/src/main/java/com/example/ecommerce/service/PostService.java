package com.example.ecommerce.service;

import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Post;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.model.Review;
import com.example.ecommerce.repository.IPostRepository;
import com.example.ecommerce.repository.IProductRepository;
import com.example.ecommerce.service.interfaces.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service

public class PostService implements IPostService {
    @Autowired
    private Mapper mapper;

    @Autowired
    private IPostRepository iPostRepository;

    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public ResponseEntity<Post> postPost(Post post, Long productId) {
        Product product = iProductRepository.findById(productId).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        post.setProduct(product);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iPostRepository.save(post));
    }

    @Override
    public ResponseEntity<?> patchPost( Long id, Review review) {
        Post postToPatch = iPostRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post Not Found"));
        Set<Review> reviews = postToPatch.getReviews();
        reviews.add(review);
        postToPatch.setReviews(reviews);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iPostRepository.save(postToPatch));
    }

    @Override
    public ResponseEntity<?> deletePost(Long id) {
        Post postToDelete = iPostRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post not found"));
        iPostRepository.delete(postToDelete);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Post Deleted");
    }
}
