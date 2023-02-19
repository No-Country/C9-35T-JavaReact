package com.example.ecommerce.service;

import com.example.ecommerce.dto.ReviewDto;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Review;
import com.example.ecommerce.repository.IReviewRepository;
import com.example.ecommerce.service.interfaces.IReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public class ReviewService implements IReviewService {
    @Autowired
    private Mapper mapper;

    @Autowired
    private IReviewRepository iReviewRepository;

    @Override
    public ResponseEntity<?> getUserReviews(Long userId) {
        List<Review> reviews = iReviewRepository.findByUser_id(userId);
        return ResponseEntity.status(HttpStatus.OK).body(reviews);
    }

    @Override
    public ResponseEntity<?> getPostReviews(Long postId) {
        List<Review> reviews = iReviewRepository.findByPost_id(postId);
        return ResponseEntity.status(HttpStatus.OK).body(reviews);
    }

    @Override
    public ResponseEntity<?> postReview(ReviewDto reviewDto) {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(iReviewRepository.save(mapper.getMapper().map(reviewDto, Review.class)));
    }
}
