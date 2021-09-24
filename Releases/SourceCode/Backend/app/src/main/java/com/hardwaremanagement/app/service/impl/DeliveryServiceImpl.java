package com.hardwaremanagement.app.service.impl;

import com.hardwaremanagement.app.model.Delivery;
import com.hardwaremanagement.app.repository.DeliveryRepository;
import com.hardwaremanagement.app.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DeliveryServiceImpl implements DeliveryService {
    @Autowired
    DeliveryRepository deliveryRepository;

    @Override
    public Delivery addDelivery(Delivery delivery) {
        return deliveryRepository.save(delivery);
    }

    @Override
    public List<Delivery> getAllDeliveries() {
        return (List<Delivery>) deliveryRepository.findAll();
    }

    @Override
    public Delivery updateDelivery(Delivery delivery) {
        return deliveryRepository.save(delivery);
    }

    @Override
    public boolean deleteDelivery(int id) {

        deliveryRepository.deleteById(id);
        return true;
    }

    @Override
    public Optional<Delivery> getDeliveryById(int id) {
        return deliveryRepository.findById(id);
    }


}
