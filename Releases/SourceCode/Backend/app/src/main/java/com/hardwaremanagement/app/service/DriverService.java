package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.Driver;

import java.util.List;

public interface DriverService {

    Driver addDriver(Driver driver);
    List<Driver> getAllDrivers();
    Driver updateDriver(Driver driver);
    boolean deleteDriver(String id);
    Driver getDriverById(String id);
}
