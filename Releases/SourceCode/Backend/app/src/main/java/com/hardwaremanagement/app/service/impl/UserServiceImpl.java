package com.hardwaremanagement.app.service.impl;

import com.hardwaremanagement.app.model.User;
import com.hardwaremanagement.app.repository.UserRepository;
import com.hardwaremanagement.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User getUser(String email) {
        return userRepository.findUserByEmail(email);
    }
}
