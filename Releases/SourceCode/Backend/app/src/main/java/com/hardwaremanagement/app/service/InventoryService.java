package com.hardwaremanagement.app.service;

import com.hardwaremanagement.app.model.Inventory;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface InventoryService {

    public Inventory addInventoryItem(Inventory inventory);
    public List<Inventory> getAllInventories();
}
