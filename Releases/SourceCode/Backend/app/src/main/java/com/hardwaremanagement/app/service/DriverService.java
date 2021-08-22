package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.Driver;

import java.util.List;

public interface DriverService {

    public Driver addDriver(Driver driver);
    public List<Driver> getAllDrivers();
}
