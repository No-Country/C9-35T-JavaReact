 package com.example.ecommerce.Dto;

import java.io.Serializable;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Analia
 */
 @AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter


public class OrderDto implements Serializable {
    @NotBlank
    private String paymentMethod;
    @NotBlank
    private Date orderDate;
    @NotBlank
    private UserDto user;





    
}
