package com.hardwaremanagement.app.controller;

import com.hardwaremanagement.app.model.Driver;
import com.hardwaremanagement.app.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/driver")
public class DriverController {

    @Autowired
    DriverService driverService;

    @PostMapping("/addDriver")
    public Driver addDriver(@RequestBody Driver driver){
        return driverService.addDriver(driver);
    }

    @GetMapping("/allDrivers")
    public List<Driver> getAllDrivers(){ return driverService.getAllDrivers();}

    @PutMapping("/updateDrivers")
    public Driver updateDriver(@RequestBody Driver driver) { return driverService.updateDriver(driver);}

    @GetMapping("/getDriverById/{id}")
    public Optional<Driver> getDriverById(@PathVariable String id){ return driverService.getDriverById(id);}

    @DeleteMapping("/deleteDriverById/{id}")
    public boolean deleteDriverById(@PathVariable String id){ return  driverService.deleteDriver(id);}
}
