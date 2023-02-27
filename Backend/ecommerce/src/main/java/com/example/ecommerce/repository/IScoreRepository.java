package com.example.ecommerce.repository;

import com.example.ecommerce.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IScoreRepository extends JpaRepository<Score, Long> {
    Score findByProduct_idAndUser_id(Long productId, Long userId);
}
