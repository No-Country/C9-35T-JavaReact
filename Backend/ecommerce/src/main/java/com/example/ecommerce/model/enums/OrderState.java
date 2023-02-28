package com.example.ecommerce.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum OrderState {

    PENDIENTE_PAGO("Pending order payment"),
    EN_CAMINO("Order on the way"),
    RECHAZADO("Order rejected"),
    FINALIZADO("Order delivered");

    private String state;
}
