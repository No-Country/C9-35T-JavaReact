package com.example.ecommerce.dto;

import lombok.Data;

import java.util.Date;

@Data
public class OfferDto {

    private String description;

    private Date startOffer;

    private Date endOffer;
}
