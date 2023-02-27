package com.example.ecommerce.util;

import com.example.ecommerce.config.CustomUserDetailsService;
import com.example.ecommerce.dto.UserDto;
import com.example.ecommerce.model.Role;
import com.example.ecommerce.model.enums.RoleName;
import com.example.ecommerce.repository.IUserRepository;
import com.example.ecommerce.service.AuthorizationService;
import com.example.ecommerce.service.interfaces.IAuthorizationService;
import com.example.ecommerce.service.interfaces.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Profile("!test")
public class DataLoaderUser implements CommandLineRunner {

    @Autowired
    private IAuthorizationService authorizationService;

    @Override
    public void run(String... args) throws Exception {

        UserDto user;

        user = UserDto.builder()
                .firstName("Gonzalo")
                .lastName("Montiel")
                .email("cachete@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);

        user = UserDto.builder()
                .firstName("Nicolas")
                .lastName("Tagliafico")
                .email("tagliafico@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);

        user = UserDto.builder()
                .firstName("Julián")
                .lastName("Álvarez")
                .email("laarania@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);

        user = UserDto.builder()
                .firstName("Paulo")
                .lastName("Dybala")
                .email("dybala@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);

        user = UserDto.builder()
                .firstName("Gonzalo")
                .lastName("Montiel")
                .email("montiel@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);

        user = UserDto.builder()
                .firstName("Nahuel")
                .lastName("Molina")
                .email("molina@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);

        user = UserDto.builder()
                .firstName("Nicolás ")
                .lastName("Otamendi")
                .email("otamendi@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);

        user = UserDto.builder()
                .firstName("Rodrigo")
                .lastName("De Paul")
                .email("depaul@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);

        user = UserDto.builder()
                .firstName("Cristian")
                .lastName("Romero")
                .email("cuti@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);

        user = UserDto.builder()
                .firstName("Lisandro")
                .lastName("Martinez")
                .email("licha@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);


        /* ROLE_ADMIN */
        user = UserDto.builder()
                .firstName("Emiliano")
                .lastName("Martinez")
                .email("dibu@gmail.com")
                .password("password")
                .build();
        authorizationService.save(user);

        user = UserDto.builder()
                .firstName("Lionel")
                .lastName("Messi")
                .email("lapulga@gmail.com")
                .password("password")
                .build();
        authorizationService.saveAdmin(user);

        user = UserDto.builder()
                .firstName("Marcos")
                .lastName("Acuña")
                .email("huevo@gmail.com")
                .password("password")
                .build();
        authorizationService.saveAdmin(user);

        user = UserDto.builder()
                .firstName("Alexis")
                .lastName("Mac Allister ")
                .email("macallister@gmail.com")
                .password("password")
                .build();
        authorizationService.saveAdmin(user);

        user = UserDto.builder()
                .firstName("Enzo")
                .lastName("Fernandez")
                .email("enzo@gmail.com")
                .password("password")
                .build();
        authorizationService.saveAdmin(user);

        user = UserDto.builder()
                .firstName("Leandro")
                .lastName("Paredes")
                .email("paredes@gmail.com")
                .password("password")
                .build();
        authorizationService.saveAdmin(user);

        user = UserDto.builder()
                .firstName("Lautaro")
                .lastName("Martinez")
                .email("eltoro@gmail.com")
                .password("password")
                .build();
        authorizationService.saveAdmin(user);

        user = UserDto.builder()
                .firstName("Ángel")
                .lastName("Di Maria")
                .email("fideo@gmail.com")
                .password("password")
                .build();
        authorizationService.saveAdmin(user);

        user = UserDto.builder()
                .firstName("Ángel")
                .lastName("Correa")
                .email("correa@gmail.com")
                .password("password")
                .build();
        authorizationService.saveAdmin(user);

        user = UserDto.builder()
                .firstName("Exequiel")
                .lastName("Palacios")
                .email("palacios@gmail.com")
                .password("password")
                .build();
        authorizationService.saveAdmin(user);

    }
}
