package com.hardwaremanagement.app.controller;

import com.hardwaremanagement.app.model.Order;
import com.hardwaremanagement.app.repository.OrderRepository;
import com.hardwaremanagement.app.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/addOrder")
    public Order createOrder(@RequestBody Order order){
        return orderService.addOrder(order);
    }

    @GetMapping("/allOrders")
    public List<Order> getAllOrders(){return orderService.getAllOrders();}
}
