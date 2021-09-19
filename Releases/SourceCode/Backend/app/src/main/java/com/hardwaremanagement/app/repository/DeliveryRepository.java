package com.hardwaremanagement.app.repository;

import com.hardwaremanagement.app.model.Delivery;
import org.springframework.data.repository.CrudRepository;

public interface DeliveryRepository extends CrudRepository<Delivery,Integer> {
}
