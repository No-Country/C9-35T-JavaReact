package com.example.ecommerce.config;

import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userInfo = userRepository.findByName(username);

        return userInfo
                .map(CustomUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));
    }
}
