package com.example.ecommerce.controller;

import com.example.ecommerce.model.Post;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.model.Review;
import com.example.ecommerce.service.interfaces.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private IPostService iPostService;

    @PostMapping("/product/{id}")
    public ResponseEntity<Post> postPost(@RequestBody Post post, @PathVariable Long productId) {
        return iPostService.postPost(post, productId);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchPost(@PathVariable Long id, @RequestBody Review review) {
        return iPostService.patchPost(id, review);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id) {
        return iPostService.deletePost(id);
    }
}
