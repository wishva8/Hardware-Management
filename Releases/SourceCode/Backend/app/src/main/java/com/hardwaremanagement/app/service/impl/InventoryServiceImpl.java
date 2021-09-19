package com.hardwaremanagement.app.service.impl;

import com.hardwaremanagement.app.model.Inventory;
import com.hardwaremanagement.app.repository.InventoryRepository;
import com.hardwaremanagement.app.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class InventoryServiceImpl implements InventoryService {

    @Autowired
    InventoryRepository inventoryRepository;

    @Override
    public Inventory addInventoryItem(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @Override
    public List<Inventory> getAllInventories() {
        return (List<Inventory>) inventoryRepository.findAll();
    }

    @Override
    public Inventory updateInverntory(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @Override
    public boolean deleteInventory(int id) {
        inventoryRepository.deleteById(id);
        return true;
    }

    @Override
    public Optional<Inventory> getInventoryById(int id) {
        return inventoryRepository.findById(id);
    }
}
