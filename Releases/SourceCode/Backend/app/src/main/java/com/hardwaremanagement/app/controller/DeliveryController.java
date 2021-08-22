package com.hardwaremanagement.app.controller;

import com.hardwaremanagement.app.model.Delivery;
import com.hardwaremanagement.app.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/delivery")
public class DeliveryController {

    @Autowired
    DeliveryService deliveryService;

    @PostMapping("/addDelivery")
    public Delivery addDelivery (@RequestBody Delivery delivery){
        return deliveryService.addDelivery(delivery);
    }

    @GetMapping("/allDeliveries")
    public List<Delivery> getAllDeliveries(){ return deliveryService.getAllDeliveries();}
}
