package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.Inventory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public interface InventoryService {

    Inventory addInventoryItem(Inventory inventory);
    List<Inventory> getAllInventories();
    Inventory updateInverntory(Inventory inventory);
    boolean deleteInventory(int id);
    Optional<Inventory> getInventoryById(int id);
}
