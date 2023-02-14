package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.dto.CategoryDto;
import com.example.ecommerce.model.Category;
import org.springframework.http.ResponseEntity;

public interface ICategoryService {
    ResponseEntity<Category> postCategory(CategoryDto categoryDto);

    ResponseEntity<Category> patchCategory(CategoryDto categoryDto, Long id);

    ResponseEntity<Category> deleteCategory(Long id);
}
