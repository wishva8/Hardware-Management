package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.Order;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface OrderService{

    public Order addOrder(Order order);
    public List<Order> getAllOrders();
}
