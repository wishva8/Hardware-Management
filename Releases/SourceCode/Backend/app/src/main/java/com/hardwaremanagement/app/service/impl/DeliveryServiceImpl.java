package com.hardwaremanagement.app.service.impl;

import com.hardwaremanagement.app.model.Delivery;
import com.hardwaremanagement.app.repository.DeliveryRepository;
import com.hardwaremanagement.app.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class DeliveryServiceImpl implements DeliveryService {
    @Autowired
    DeliveryRepository deliveryRepository;

    @Override
    public Delivery addDelivery(Delivery delivery) {
        return deliveryRepository.save(delivery);
    }
}
