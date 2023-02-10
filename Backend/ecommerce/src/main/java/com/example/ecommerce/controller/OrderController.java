/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.ecommerce.controller;

import com.example.ecommerce.Dto.OrderDto;
import com.example.ecommerce.Service.iOrderService;

import com.example.ecommerce.model.Order;
import com.example.ecommerce.model.User;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Analia
 */
@RestController
//@CrossOrigin(origins = "")

public class OrderController {

    @Autowired
    iOrderService orderService;

    @GetMapping("/")
    public ResponseEntity<?> getAllOrders() {
        return ResponseEntity.status(HttpStatus.OK).body("entro bien");
    }

    @GetMapping("/orders/list")
    public ResponseEntity<List<Order>> list() {
        List<Order> list = orderService.getOrders();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    //    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/orders/create")
    public ResponseEntity<?> create(@RequestBody OrderDto orderDto) {
        if (!StringUtils.isEmpty(orderDto.getOrderDate())) {
        } else {
            return new ResponseEntity(new Message("La fecha de la orden es obligatoria"), HttpStatus.BAD_REQUEST);
        }
        //ModelMapper modelMap = new ModelMapper();
ModelMapper modelMapper = new ModelMapper();


        User u =modelMapper.map(orderDto.getUser(), User.class);
                
        Order order = new Order(orderDto.getPaymentMethod(), orderDto.getOrderDate(),u );

        

        
        orderService.saveOrder(order);
        return new ResponseEntity(new Message("save ok"), HttpStatus.OK);
    }

    @GetMapping("/orders/detail/{id}")
    public ResponseEntity<Order> getById(@PathVariable("id") long id) {
        if (!orderService.existsById(id)) {
            return new ResponseEntity(new Message("no existe"), HttpStatus.NOT_FOUND);
        }
        Order order = orderService.getOne(id).get();
        return new ResponseEntity(order, HttpStatus.OK);
    }

    //    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/orders/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody OrderDto orderDto) {

        if (!orderService.existsById(id)) {
            return new ResponseEntity(new Message("El Id No existe"), HttpStatus.BAD_REQUEST);
        }


        if (StringUtils.isEmpty(orderDto.getOrderDate())) {
            return new ResponseEntity(new Message("La fecha de orden es Obligatoria"), HttpStatus.BAD_REQUEST);
        }

        Order order = orderService.getOne(id).get();
            //        asignar datos
         
        orderService.saveOrder(order);
        return new ResponseEntity(new Message("Guardada"), HttpStatus.OK);
    }

    //@PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/orders/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") long id) {
        if (!orderService.existsById(id)) {
            return new ResponseEntity(new Message("No se encuentra el Id"), HttpStatus.NOT_FOUND);
        }
        orderService.deleteOrder(id);
        return new ResponseEntity(new Message("Borrada"), HttpStatus.OK);
    }

}