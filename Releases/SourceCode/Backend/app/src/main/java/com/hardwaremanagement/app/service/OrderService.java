package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.Order;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public interface OrderService{

    Order addOrder(Order order);
    List<Order> getAllOrders();
    Order updateOrder(Order order);
    boolean deleteOrder(int id);
    Optional<Order> getOrderById(int id);
}
