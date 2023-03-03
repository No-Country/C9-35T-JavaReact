package com.example.ecommerce.util;

import com.example.ecommerce.dto.CategoryDto;
import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.*;
import com.example.ecommerce.model.enums.OrderState;
import com.example.ecommerce.repository.IOrderRepository;
import com.example.ecommerce.repository.IProductRepository;
import com.example.ecommerce.repository.IStateRepository;
import com.example.ecommerce.repository.IUserRepository;
import com.example.ecommerce.service.interfaces.IAuthorizationService;
import com.example.ecommerce.service.interfaces.ICategoryService;
import com.example.ecommerce.service.interfaces.IOrderService;
import com.example.ecommerce.service.interfaces.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
@Profile("!test")
public class DataLoaderOrders implements CommandLineRunner {
    @Autowired
    private IAuthorizationService authorizationService;
    @Autowired
    private Mapper mapper;

    @Autowired
    private IStateRepository stateRepository;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private ICategoryService categoryService;

    @Autowired
    private IProductService productService;

    @Autowired
    private IProductRepository productRepository;

    @Autowired
    private IOrderRepository orderRepository;

    @Override
    public void run(String... args) throws Exception {

        State state;
        state = State.builder().name(OrderState.PENDIENTE_PAGO).description("Pendiente de pago").build();
        state = stateRepository.save(state);

        state = State.builder().name(OrderState.EN_CAMINO).description("En camino").build();
        state = stateRepository.save(state);

        state = State.builder().name(OrderState.RECHAZADO).description("Rechazado").build();
        state = stateRepository.save(state);

        state = State.builder().name(OrderState.FINALIZADO).description("Entregado").build();
        state = stateRepository.save(state);
        UserDto userDto;
        userDto = UserDto.builder()
                .firstName("Prueba Order")
                .lastName("Apellido")
                .email("songoango@gmail.com")
                .password("password")
                .address("Calle falsa 123")
                .phone("12345")
                .avatar("https://unavatar.io/")
                .build();

        User user = userRepository.save(mapper.getMapper().map(userDto, User.class));


//        Category category;
//        category = Category.builder().name("Pruebiña").description("Muebles de pruebiña").build();
//        category = categoryService.postCategory(mapper.getMapper().map(category, CategoryDto.class)).getBody();
//
//        Product product;
//        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Silla linda").price(400.0).color("black").description("Silla negra").stock(50L).build();


//        Item item;
//        Order order;
//        order = Order.builder().user(user).state(state).paymentMethod("Efectivo").orderDate(new Date()).build();
//        item = Item.builder().product((productRepository.save(product))).amount(5L).order(order).build();
//        Set<Item> items = new HashSet<>();
//        items.add(item);
//        order.setItems(items);

//
//        orderRepository.save(order);
    }

}
