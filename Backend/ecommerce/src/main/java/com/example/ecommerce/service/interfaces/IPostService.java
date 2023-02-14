package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.model.Post;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.model.Review;
import org.springframework.http.ResponseEntity;

public interface IPostService {
    ResponseEntity<Post> postPost(Post post, Long productId);

    ResponseEntity<?> patchPost( Long id, Review review);

    ResponseEntity<?> deletePost(Long id);
}
