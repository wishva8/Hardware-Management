package com.hardwaremanagement.app.controller;

import com.hardwaremanagement.app.model.Inventory;
import com.hardwaremanagement.app.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/inventory")
public class InventoryController {

    @Autowired
    InventoryService inventoryService;

    @PostMapping("/addItem")
    public Inventory addInventory(@RequestBody Inventory inventory){return inventoryService.addInventoryItem(inventory);}

    @GetMapping("/allInventory")
    public List<Inventory> getAllInventory(){return inventoryService.getAllInventories();}

    @PutMapping("/updateInventoryDetails")
    public Inventory updateInventory(@RequestBody Inventory inventory){ return inventoryService.updateInverntory(inventory);}

    @GetMapping("/getInventoryById/{id}")
    public Optional<Inventory> getInventoryById(@PathVariable int id){ return inventoryService.getInventoryById(id);}

    @DeleteMapping("/deleteInventoryById/{id}")
    public boolean deleteInventoryById(@PathVariable int id){ return  inventoryService.deleteInventory(id);}
}
