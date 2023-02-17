package com.example.ecommerce.service;

import com.example.ecommerce.dto.CategoryDto;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Category;
import com.example.ecommerce.repository.ICategoryRepository;
import com.example.ecommerce.service.interfaces.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service

public class CategoryService implements ICategoryService {
    @Autowired
    private Mapper mapper;

    @Autowired
    private ICategoryRepository iCategoryRepository;

    @Override
    public ResponseEntity<Category> postCategory(CategoryDto categoryDto) {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iCategoryRepository.save(mapper.getMapper().map(categoryDto, Category.class)));
    }

    @Override
    public ResponseEntity<Category> patchCategory(CategoryDto categoryDto, Long id) {
        Category categoryToPatch = iCategoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Category not Found"));
        categoryToPatch.setDescription(categoryDto.getDescription());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iCategoryRepository.save(categoryToPatch));
    }

    @Override
    public ResponseEntity<Category> deleteCategory(Long id) {
        Category categoryToDelete = iCategoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        iCategoryRepository.delete(categoryToDelete);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(categoryToDelete);
    }
}
