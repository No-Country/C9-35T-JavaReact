package com.example.ecommerce.service;

import com.example.ecommerce.exception.ResourceFoundException;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.Mapper;
import com.example.ecommerce.model.Role;
import com.example.ecommerce.model.enums.RoleName;
import com.example.ecommerce.repository.IRoleRepository;
import com.example.ecommerce.service.interfaces.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class RoleService implements IRoleService {
    @Autowired
    private Mapper mapper;

    @Autowired
    private IRoleRepository iRoleRepository;

    @Override
    public ResponseEntity<?> findByName(RoleName roleName) {
        try {
            Role role = iRoleRepository.findByName(roleName);
            if (role == null) {
                throw new ResourceNotFoundException("Role not found");
            }
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(role);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e);
        }
    }

    @Override
    public ResponseEntity<?> postRole(Role role) {
        try {
            if (iRoleRepository.existsByName(role.getName())) {
                throw new ResourceFoundException("Role already exists");
            }
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(iRoleRepository.save(role));
        } catch (ResourceFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e);
        }
    }

}
