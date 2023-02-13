package com.example.ecommerce.repository;

import com.example.ecommerce.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Role,Long> {
}
