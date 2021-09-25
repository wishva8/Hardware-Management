package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.Driver;

import java.util.List;
import java.util.Optional;

public interface DriverService {

    Driver addDriver(Driver driver);
    List<Driver> getAllDrivers();
    Driver updateDriver(Driver driver);
    boolean deleteDriver(String id);
    Optional<Driver> getDriverById(String id);
}
