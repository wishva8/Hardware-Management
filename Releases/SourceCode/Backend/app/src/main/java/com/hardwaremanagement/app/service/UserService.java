package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.User;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface UserService {
    public User addUser(User user);
    public List<User> getAllUsers();
}