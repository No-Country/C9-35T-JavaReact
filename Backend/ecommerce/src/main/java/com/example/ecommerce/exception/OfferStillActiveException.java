package com.example.ecommerce.exception;

public class OfferStillActiveException extends RuntimeException {
    public OfferStillActiveException() {
        super();
    }

    public OfferStillActiveException(final String message) {
        super(message);
    }

    public OfferStillActiveException(final String message, final Throwable cause) {
        super(message, cause);
    }

}
