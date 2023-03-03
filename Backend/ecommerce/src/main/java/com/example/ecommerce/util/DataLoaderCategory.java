package com.example.ecommerce.util;

import com.example.ecommerce.dto.CategoryDto;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Category;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.service.ImageService;
import com.example.ecommerce.service.interfaces.ICategoryService;
import com.example.ecommerce.service.interfaces.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.io.*;
import java.util.Base64;

@Component
@Profile("!test")
public class DataLoaderCategory implements CommandLineRunner {

    @Autowired
    private IProductService productService;

    @Autowired
    private ICategoryService categoryService;

    @Autowired
    private ImageService imageService;

    @Autowired
    private Mapper mapper;


    @Override
    public void run(String... args) throws Exception {

        Category category;
        category = Category.builder().name("Living").description("Muebles para el living").build();
        category = categoryService.postCategory(mapper.getMapper().map(category, CategoryDto.class)).getBody();

        Product product;
        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Silla premium").price(400.0).color("black").description("Silla negra").stock(50L).build();
        productService.postProduct(product);
        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Silla de pino").price(400.0).color("white").description("Silla hecha con madera de pino").stock(60L).build();
        productService.postProduct(product);
        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Mesa premium").price(400.0).color("black").description("Mesa negra").stock(70L).build();
        productService.postProduct(product);
        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Mesa de pino").price(400.0).color("white").description("Mesa hecha con madera de pino").stock(80L).build();
        productService.postProduct(product);
        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Alacena premium").price(400.0).color("black").description("Alacena negra").stock(90L).build();
        productService.postProduct(product);
        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Alacena de pino").price(400.0).color("white").description("Alacena hecha con madera de pino").stock(100L).build();
        productService.postProduct(product);


        category = Category.builder().name("Comedor").description("Muebles para el comedor").build();
        category = categoryService.postCategory(mapper.getMapper().map(category, CategoryDto.class)).getBody();

        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Silla standard").price(400.0).color("black").description("Silla simple para la cocina").stock(50L).build();
        productService.postProduct(product);
        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Silla reforzada").price(400.0).color("white").description("Silla reforzada").stock(60L).build();
        productService.postProduct(product);


        category = Category.builder().name("Estudio").description("Muebles de oficina").build();
        category = categoryService.postCategory(mapper.getMapper().map(category, CategoryDto.class)).getBody();

        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Escritorio").price(400.0).color("black").description("Escritorio de aglomerado").stock(50L).build();
        productService.postProduct(product);
        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Estanteria").price(400.0).color("white").description("Estante para colgar").stock(60L).build();
        productService.postProduct(product);


        category = Category.builder().name("Dormitorio").description("Muebles para el dormitorio").build();
        category = categoryService.postCategory(mapper.getMapper().map(category, CategoryDto.class)).getBody();

        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Silla Papá oso").price(400.0).color("black").description("Cama reforzada").stock(50L).build();
        productService.postProduct(product);
        product = Product.builder().category(mapper.getMapper().map(category, Category.class)).name("Silla Mamá osa").price(400.0).color("white").description("Cama simple").stock(60L).build();
        productService.postProduct(product);
    }


//    public void saveImagesToProducts(Product product) throws IOException {
//
//        byte[] fileContent = FileUtils.readFileToByteArray(new File("C:\\Users\\Victorio\\Desktop\\proyectos\\Proyecto JavaReact No-Country\\C9-35T-JavaReact\\Backend\\ecommerce\\src\\main\\resources\\images\\silla_blanca.jpg"));
//        String encodedString = Base64.getEncoder().encodeToString(fileContent);
//
//        Image image;
//        image = Image.builder().name("Imagensita blanca").dataBase64(encodedString).product(product).isMain(true).build();
//        imageService.postImageToProduct(product.getId(), image);
//
//        fileContent = FileUtils.readFileToByteArray(new File("C:\\Users\\Victorio\\Desktop\\proyectos\\Proyecto JavaReact No-Country\\C9-35T-JavaReact\\Backend\\ecommerce\\src\\main\\resources\\images\\silla_negra.jpg"));
//        encodedString = Base64.getEncoder().encodeToString(fileContent);
//
//        image = Image.builder().name("Imagensita negra").dataBase64(encodedString).product(product).isMain(false).build();
//        imageService.postImageToProduct(product.getId(), image);
//    }

}
