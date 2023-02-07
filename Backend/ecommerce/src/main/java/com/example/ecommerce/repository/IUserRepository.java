package com.example.ecommerce.repository;


import com.example.ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {

}
