package com.hardwaremanagement.app.controller;


import com.hardwaremanagement.app.dao.LoginDao;
import com.hardwaremanagement.app.model.User;
import com.hardwaremanagement.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    UserRepository userRepository;

    User user = new User();
    String username;
    String password;

    @PostMapping("/auth")
    public Object getUserDetails(@RequestBody LoginDao loginDao){

            user = userRepository.findUserByEmail(loginDao.getUsername());

            username = user.getEmail();
            password = user.getPassword();

        System.out.println(username + "||" + password);
        System.out.println(loginDao.getUsername() + "||" + loginDao.getPassword());


            if (username.toString().equals(loginDao.getUsername()) && password.toString().equals(loginDao.getPassword())) {
                return user;

            } else return HttpStatus.UNAUTHORIZED;


    }

}
