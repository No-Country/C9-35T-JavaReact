package com.example.ecommerce.controller;

import com.example.ecommerce.dto.ReviewDto;
import com.example.ecommerce.service.interfaces.IReviewService;
import org.apache.coyote.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    @Autowired
    private IReviewService iReviewService;

    @PostMapping("/")
    public ResponseEntity<?> postReview (@RequestBody ReviewDto reviewDto)
    {
       return  iReviewService.postReview(reviewDto);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserReviews(@PathVariable Long userId)
    {
       return iReviewService.getUserReviews(userId);
    }

    @GetMapping("/post/{id}")
    public ResponseEntity<?> getPostReviews (@PathVariable Long postId)
    {
        return iReviewService.getPostReviews(postId);
    }
}
