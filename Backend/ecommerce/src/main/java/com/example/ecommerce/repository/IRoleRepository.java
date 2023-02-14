package com.example.ecommerce.repository;

import com.example.ecommerce.model.Role;
import com.example.ecommerce.model.enums.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Role,Long> {

    Boolean existsByName(RoleName roleName);

    Role findByName(RoleName roleName);
}
