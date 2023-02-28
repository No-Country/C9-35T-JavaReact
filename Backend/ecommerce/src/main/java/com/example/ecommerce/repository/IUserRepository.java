package com.example.ecommerce.repository;


import com.example.ecommerce.model.Shipment;
import com.example.ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IUserRepository extends JpaRepository<User, Long> {

    Optional<User> findByFirstName(String userFirstName);

    User findByEmail(String email);

    boolean existsByEmail(String email);
    Optional<User> findOptionalByEmail(String email);
}
