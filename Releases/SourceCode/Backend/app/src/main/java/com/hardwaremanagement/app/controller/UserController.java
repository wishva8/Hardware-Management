package com.hardwaremanagement.app.controller;

import com.hardwaremanagement.app.model.User;
import com.hardwaremanagement.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @GetMapping("/allUsers")
    public List<User> getAllUsers(){return userService.getAllUsers();}
}
