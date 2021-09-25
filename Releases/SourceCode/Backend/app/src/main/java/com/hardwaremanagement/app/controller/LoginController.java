package com.hardwaremanagement.app.controller;


import com.hardwaremanagement.app.dao.LoginDao;
import com.hardwaremanagement.app.model.User;
import com.hardwaremanagement.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    UserRepository userRepository;

    User user = null;
    String username;
    String password;

    @GetMapping
    public Object getUserDetails(LoginDao loginDao){

        user = userRepository.findUserByEmail(loginDao.getUsername());

        username = user.getEmail();
        password = user.getPassword();

        if((username.equals(loginDao.getPassword()) && (password.equals(loginDao.getPassword())))){
            return user;
        }
        else return HttpStatus.UNAUTHORIZED;
    }

}
