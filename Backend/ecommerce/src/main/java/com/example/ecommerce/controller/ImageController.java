package com.example.ecommerce.controller;

import com.example.ecommerce.model.Image;
import com.example.ecommerce.service.interfaces.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    private IImageService iImageService;

    @PostMapping("/toProduct/{id}")
    public ResponseEntity<?> postImageToProduct(@PathVariable Long id, @RequestBody Image image) {
        return iImageService.postImageToProduct(id, image);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<?> getProductImages(@PathVariable Long id) {
        return iImageService.getProductImages(id);
    }
}
