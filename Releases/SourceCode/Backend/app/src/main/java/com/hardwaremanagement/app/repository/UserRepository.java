package com.hardwaremanagement.app.repository;

import com.hardwaremanagement.app.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,String> {

    User findUserByEmail(String email);
}
