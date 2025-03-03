package com.example.MagicWishes.service;

import com.example.MagicWishes.exceptions.UserNotFoundException;
import com.example.MagicWishes.model.User;
import com.example.MagicWishes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public boolean findUserByEmail(String email) {
        User user = this.userRepository.findUserByEmail(email).orElseThrow(() -> new UserNotFoundException("User not found"));
        return user != null;
    }

    public Long findUserIdByEmail(String email) {
        User user = this.userRepository.findUserByEmail(email).orElse(null);
        return user != null ? user.getId() : null;
    }

    public User findUserByEmail2(String email){
        return this.userRepository.findUserByEmail(email).orElse(null);
    }

   public User findUserById(Long id) {
        return this.userRepository.findById(id).orElse(null);
   }

    public void deleteUserById(Long id){
        userRepository.deleteById(id);
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> login(String email, String password) {
        User user = this.userRepository.findUserByEmail(email).orElse(null);
        try {
            if (user.getPassword().equals(password)) {
                return Optional.of(user);
            }
        }catch (Exception e){
            return Optional.empty();
        }
        return Optional.empty();
    }

}
