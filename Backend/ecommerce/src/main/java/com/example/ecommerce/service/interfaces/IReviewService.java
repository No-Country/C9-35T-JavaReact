package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.dto.ReviewDto;
import org.springframework.http.ResponseEntity;

public interface IReviewService {
    ResponseEntity<?> getUserReviews(Long userId);

    ResponseEntity<?> getPostReviews(Long orderId);

    ResponseEntity<?> postReview(ReviewDto reviewDto);
}
