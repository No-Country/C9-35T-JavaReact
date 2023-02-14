package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.model.Role;
import com.example.ecommerce.model.enums.RoleName;
import org.springframework.http.ResponseEntity;

public interface IRoleService {
    ResponseEntity<?> findByName(RoleName roleUser);

    ResponseEntity<?> postRole(Role role);
}
