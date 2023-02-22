package com.example.ecommerce.service.interfaces;

import com.example.ecommerce.exception.ResourceFoundException;
import com.example.ecommerce.model.Role;
import com.example.ecommerce.model.enums.RoleName;
import org.springframework.http.ResponseEntity;

public interface IRoleService {
    Role findByName(RoleName roleUser);

    ResponseEntity<?> postRole(Role role);

    Role createRole(Role role) throws ResourceFoundException;
}
