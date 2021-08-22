package com.hardwaremanagement.app.service.impl;

import com.hardwaremanagement.app.model.Order;
import com.hardwaremanagement.app.repository.OrderRepository;
import com.hardwaremanagement.app.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository orderRepository;

    public Order addOrder(Order order){
        return orderRepository.save(order);
    }
}
