/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.ecommerce.Service;

import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.IUserRepository;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Analia
 */
    
@Service
@Transactional
public class iUserService {

    @Autowired
    IUserRepository rUser;

    public List<User> getUsers() {
        return this.rUser.findAll();
    }

    public Optional<User> getOne(Long id) {
        return this.rUser.findById(id);
    }


    public void saveUser(User user) {
        this.rUser.save(user);
    }

    public void editUser(User user) {
    }

    public void deleteUser(Long id) {
        this.rUser.deleteById(id);
    }

    public boolean existsById(Long id) {
        return this.rUser.existsById(id);
    }
 

}

