package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.model.Item;
import org.springframework.http.ResponseEntity;

public interface IItemService {
    ResponseEntity<?> getAllItems();

    ResponseEntity<?> getItem(Long id);

    ResponseEntity<?> getItemsByOrder(Long id);
    ResponseEntity<?> getItemsByProduct(Long id);

    ResponseEntity<?> postItem(Item item);

    ResponseEntity<?> patchItem(Long id, Item item);

    ResponseEntity<?> deleteItem(Long id);

}
