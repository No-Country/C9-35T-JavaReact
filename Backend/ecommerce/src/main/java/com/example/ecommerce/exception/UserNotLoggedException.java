package com.example.ecommerce.exception;

public class UserNotLoggedException extends RuntimeException {
    public UserNotLoggedException() {
        super();
    }

    public UserNotLoggedException(final String message) {
        super(message);
    }

    public UserNotLoggedException(final String message, final Throwable cause) {
        super(message, cause);
    }
}
