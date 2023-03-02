package com.example.ecommerce.service;

import com.example.ecommerce.dto.ItemDto;
import com.example.ecommerce.dto.OrderDto;
import com.example.ecommerce.dto.OrderPatchDto;
import com.example.ecommerce.dto.ResponseOrderDto;
import com.example.ecommerce.exception.NotEnoughStockException;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.*;
import com.example.ecommerce.model.enums.OrderState;
import com.example.ecommerce.repository.*;
import com.example.ecommerce.service.interfaces.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService implements IOrderService {

    @Autowired
    private IOrderRepository iOrderRepository;

    @Autowired
    private IStateRepository iStateRepository;

    @Autowired
    private IProductRepository iProductRepository;
    @Autowired
    private IUserRepository iUserRepository;

    @Autowired
    private IItemRepository iItemRepository;

    @Autowired
    private Mapper mapper;

    public ResponseEntity<?> getOrder(Long id) {
        Order order = iOrderRepository.findById(id).orElseThrow();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(order, ResponseOrderDto.class));
//        return ResponseEntity.status(HttpStatus.ACCEPTED).body(order);
    }


    @Override
    public ResponseEntity<?> getOrdersByUser(Long id) {
        List<Order> orders = iOrderRepository.findByUser_id(id);
        List<ResponseOrderDto> ordersDto = orders.stream().map(order -> mapper.getMapper().map(order, ResponseOrderDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(ordersDto);
    }


    @Override
    public ResponseEntity<?> getAllOrders() {
        List<Order> orders = iOrderRepository.findAll();
        List<ResponseOrderDto> ordersDto = orders.stream().map(order -> mapper.getMapper().map(order, ResponseOrderDto.class)).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(ordersDto);
    }

    @Override
    public ResponseEntity<?> postOrder(OrderDto orderDto) {
        Order order = mapper.getMapper().map(orderDto, Order.class);
        State state = iStateRepository.findById(order.getState().getId()).orElseThrow(() -> new ResourceNotFoundException("State not found"));
        order.setState(state);
        User user = iUserRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
        order.setUser(user);
        Product product;
        try {
            for (ItemDto itemDto : orderDto.getItems()) {
                product = iProductRepository.findById(itemDto.getProduct().getId()).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
                if (itemDto.getAmount() > product.getStock()) {
                    throw new NotEnoughStockException("Not enough stock");
                }
                product.setStock(product.getStock() - itemDto.getAmount());
                order.getProducts().add(product);
                product.getOrders().add(order);
                Item item = new Item();
                Item.ItemId itemId = new Item.ItemId();
                item.setId(itemId);
                item.setAmount(itemDto.getAmount());
                order = iOrderRepository.save(order);
                itemId.setOrderId(order.getId());
                itemId.setProductId(product.getId());
                iItemRepository.save(item);
            }
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(order, ResponseOrderDto.class));
        } catch (NotEnoughStockException | ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> patchOrder(Long id, OrderPatchDto order) {
        Order orderToUpdate = iOrderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        State state = iStateRepository.findById(order.getState().getId()).orElseThrow(() -> new ResourceNotFoundException("State not found"));
        orderToUpdate.setState(state);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(iOrderRepository.save(orderToUpdate), ResponseOrderDto.class));
    }

    @Override
    public ResponseEntity<?> deleteOrder(Long id) {
        Order orderToDelete = iOrderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        iOrderRepository.delete(orderToDelete);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("Order deleted");
    }

}
