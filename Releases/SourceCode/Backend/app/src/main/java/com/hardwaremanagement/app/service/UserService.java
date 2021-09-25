package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.User;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface UserService {
    User addUser(User user);
    List<User> getAllUsers();
    User getUser(String email);

}
