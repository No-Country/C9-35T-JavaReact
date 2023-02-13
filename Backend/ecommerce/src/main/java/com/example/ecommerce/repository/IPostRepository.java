package com.example.ecommerce.repository;

import com.example.ecommerce.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPostRepository extends JpaRepository<Post, Long> {
}
