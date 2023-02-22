package com.example.ecommerce.util;

import com.example.ecommerce.config.CustomUserDetailsService;
import com.example.ecommerce.model.Role;
import com.example.ecommerce.model.enums.RoleName;
        import com.example.ecommerce.repository.IUserRepository;
        import com.example.ecommerce.service.interfaces.IRoleService;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.boot.CommandLineRunner;
        import org.springframework.context.annotation.Profile;
        import org.springframework.security.crypto.password.PasswordEncoder;
        import org.springframework.stereotype.Component;


@Component
@Profile("test")
public class DataLoaderRole implements CommandLineRunner {

    @Autowired
    private IRoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomUserDetailsService userService;

    @Autowired
    private IUserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        Role role;
        role = Role.builder()
                .name(RoleName.ROLE_ADMIN).build();
        roleService.createRole(role);

        role = Role.builder()
                .name(RoleName.ROLE_USER).build();
        roleService.createRole(role);
    }
}