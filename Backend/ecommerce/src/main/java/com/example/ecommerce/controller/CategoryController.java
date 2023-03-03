package com.example.ecommerce.controller;

import com.example.ecommerce.dto.CategoryDto;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.model.Category;
import com.example.ecommerce.service.interfaces.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private ICategoryService iCategoryService;

    @PostMapping("/")
    public ResponseEntity<Category> postCategory(@RequestBody CategoryDto categoryDto) {
        return iCategoryService.postCategory(categoryDto);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Category> patchCategory(@RequestBody CategoryDto categoryDto, @PathVariable Long id) {
        return iCategoryService.patchCategory(categoryDto, id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Category> deleteCategory(@PathVariable Long id) {
        return iCategoryService.deleteCategory(id);
    }
}
