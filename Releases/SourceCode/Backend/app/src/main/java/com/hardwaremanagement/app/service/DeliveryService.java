package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.Delivery;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public interface DeliveryService {
    public Delivery addDelivery(Delivery delivery);
}
