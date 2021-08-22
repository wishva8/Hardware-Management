package com.hardwaremanagement.app.service.impl;

import com.hardwaremanagement.app.model.User;
import com.hardwaremanagement.app.repository.UserRepository;
import com.hardwaremanagement.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }
}
