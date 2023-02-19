package com.example.ecommerce.repository;

import com.example.ecommerce.model.Post;
import com.example.ecommerce.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByUser_id(Long userId);

    List<Review> findByPost_id(Long postId);
}
