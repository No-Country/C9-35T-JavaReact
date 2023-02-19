package com.example.ecommerce.dto;

import com.example.ecommerce.model.Post;
import com.example.ecommerce.model.User;
import lombok.Data;

@Data
public class ReviewDto {

    private String description;

    private User user;

    private Post post;

}
