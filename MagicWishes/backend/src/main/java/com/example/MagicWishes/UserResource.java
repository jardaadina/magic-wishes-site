package com.example.MagicWishes;

import com.example.MagicWishes.model.User;
import com.example.MagicWishes.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserResource {
    private final UserService userService;

    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        userService.addUser(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/exists/{email}")
    public ResponseEntity<Boolean> existsByEmail(@PathVariable String email) {
        boolean exists;
        try{
            exists = this.userService.findUserByEmail(email);
        } catch (Exception e) {
            exists = false;
        }
        return new ResponseEntity<>(exists, HttpStatus.OK);
    }

    @GetMapping("/getid/{email}")
    public ResponseEntity<Long> getUserById(@PathVariable String email) {
        Long id = userService.findUserIdByEmail(email);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<Optional<User>> login(@PathVariable String email, @PathVariable String password) {
        Optional<User> user = userService.login(email, password);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/getuser/{email}")
    public ResponseEntity<User> getNameById(@PathVariable String email) {
        User user = this.userService.findUserByEmail2(email);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/getname/{id}")
    public ResponseEntity<User> getNameById(@PathVariable Long id) {
        User name = this.userService.findUserById(id);
        return new ResponseEntity<>(name, HttpStatus.OK);
    }


    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
