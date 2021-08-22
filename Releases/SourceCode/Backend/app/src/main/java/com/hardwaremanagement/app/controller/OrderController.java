package com.hardwaremanagement.app.controller;

import com.hardwaremanagement.app.model.Order;
import com.hardwaremanagement.app.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    OrderRepository orderRepository;

    @PostMapping("addOrder")
    public Order createOrder(@RequestBody Order order){
        return orderRepository.save(order);
    }

    @GetMapping("/getAllOrders")
    public List getAllOrders(){
        String query = "select customer_name from orders where customer_name like 'I%'";

        List name;

        name  = jdbcTemplate.queryForList(query);
        return name;
    }
}
