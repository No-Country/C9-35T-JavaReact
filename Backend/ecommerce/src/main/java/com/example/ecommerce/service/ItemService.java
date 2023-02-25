package com.example.ecommerce.service;

import com.example.ecommerce.dto.ItemDto;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Item;
import com.example.ecommerce.repository.IItemRepository;
import com.example.ecommerce.service.interfaces.IItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ItemService implements IItemService {

    @Autowired
    private IItemRepository iItemRepository;

    @Autowired
    private Mapper mapper;

    public ResponseEntity<?> getItem(Long id) {
        Item item = iItemRepository.findById(id).orElseThrow();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(item,ItemDto.class));
    }

    @Override
    public ResponseEntity<?> getItemsByProduct(Long id) {
        List<Item> items = iItemRepository.findByProduct_id(id);
        List<ItemDto> itemsDto = items.stream().map(item -> mapper.getMapper().map(item, ItemDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(itemsDto);
    }

    @Override
    public ResponseEntity<?> getItemsByOrder(Long id) {
        List<Item> items = iItemRepository.findByOrder_id(id);
        List<ItemDto> itemsDto = items.stream().map(item -> mapper.getMapper().map(item, ItemDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(itemsDto);
    }

    @Override
    public ResponseEntity<?> getAllItems() {
        List<Item> items = iItemRepository.findAll();
        List<ItemDto> itemsDto = items.stream().map(item -> mapper.getMapper().map(item, ItemDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(itemsDto);
    }

    @Override
    public ResponseEntity<?> postItem(Item item) {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iItemRepository.save(item));
    }

    @Override
    public ResponseEntity<?> patchItem(Long id,Item item) {
        Item itemToUpdate = iItemRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Item not found"));
        itemToUpdate.setAmount (item.getAmount());
        itemToUpdate.setOrder(item.getOrder());
        itemToUpdate.setProduct(item.getProduct());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iItemRepository.save(itemToUpdate));
    }

    @Override
    public ResponseEntity<?> deleteItem(Long id) {
        Item itemToDelete = iItemRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Item not found"));
        iItemRepository.delete(itemToDelete);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("Item deleted");
    }

}
