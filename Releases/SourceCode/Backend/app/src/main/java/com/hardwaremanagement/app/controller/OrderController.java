package com.hardwaremanagement.app.controller;

import com.hardwaremanagement.app.model.Order;
import com.hardwaremanagement.app.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/addOrder") public Order createOrder(@RequestBody Order order){return orderService.addOrder(order);}

    @GetMapping("/allOrders")
    public List<Order> getAllOrders(){return orderService.getAllOrders();}

    @PutMapping("/updateOrderDetails")
    public Order updateOrder(@RequestBody Order order) { return orderService.updateOrder(order);}

    @GetMapping("/getOrderById/{id}")
    public Optional<Order> getOrderById(@PathVariable int id){ return orderService.getOrderById(id);}

    @DeleteMapping("/deleteOrderById/{id}")
    public boolean deleteOrderById(@PathVariable int id){ return  orderService.deleteOrder(id);}
}
