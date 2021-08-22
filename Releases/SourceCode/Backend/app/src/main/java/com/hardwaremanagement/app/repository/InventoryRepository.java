package com.hardwaremanagement.app.repository;

import com.hardwaremanagement.app.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface InventoryRepository extends CrudRepository<Inventory,Integer> {
}
