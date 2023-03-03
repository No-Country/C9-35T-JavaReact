package com.example.ecommerce.controller;

import com.example.ecommerce.model.Item;
import com.example.ecommerce.model.Order;
import com.example.ecommerce.service.interfaces.IItemService;
import com.example.ecommerce.service.interfaces.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/items")
@CrossOrigin("*")
public class ItemController {


    @Autowired
    private IItemService iItemService;

    @GetMapping("/")
    public ResponseEntity<?> getAllItems() {
        return iItemService.getAllItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getItemById(@PathVariable Long id) {
        return iItemService.getItem(id);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchItem(@PathVariable Long id, @RequestBody Item item) {
        return iItemService.patchItem(id, item);
    }

    @PostMapping("/")
    public ResponseEntity<?> postItem(@RequestBody Item item) {
        return iItemService.postItem(item);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable Long id) {
        return iItemService.deleteItem(id);
    }

    @GetMapping("/order/{id}")
    public ResponseEntity<?> getItemsByOrder(@PathVariable Long id) {
        return iItemService.getItemsByOrder(id);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<?> getItemsByProduct(@PathVariable Long id) {
        return iItemService.getItemsByProduct(id);
    }

}
