package com.hardwaremanagement.app.service.impl;

import com.hardwaremanagement.app.model.Driver;
import com.hardwaremanagement.app.repository.DriverRepository;
import com.hardwaremanagement.app.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepository driverRepository;

    public Driver addDriver(Driver driver){
        return driverRepository.save(driver);
    }
}
