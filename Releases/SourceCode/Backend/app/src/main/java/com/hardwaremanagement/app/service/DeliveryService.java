package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.Delivery;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public interface DeliveryService {
    Delivery addDelivery(Delivery delivery);
    List<Delivery> getAllDeliveries();
    Delivery updateDelivery(Delivery delivery);
    boolean deleteDelivery(int id);
    Optional<Delivery> getDeliveryById(int id);
}
