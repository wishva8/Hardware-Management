package com.hardwaremanagement.app.model;

import javax.persistence.*;

@Entity
@Table(name = "inventories")
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int inventoryNo;

    @Column(name = "item_no")
    private String itemNo;

    @Column(name = "item_category")
    private String itemCategory;

    @Column(name = "item_description")
    private String description;

    @Column(name = "unit_price")
    private float unitPrice;

    @Column(name = "item_quantity")
    private int quantity;

    public Inventory() {
    }

    public Inventory(int inventoryNo, String itemNo, String itemCategory, String description, float unitPrice, int quantity) {
        this.inventoryNo = inventoryNo;
        this.itemNo = itemNo;
        this.itemCategory = itemCategory;
        this.description = description;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }

    public int getInventoryNo() {
        return inventoryNo;
    }

    public void setInventoryNo(int inventoryNo) {
        this.inventoryNo = inventoryNo;
    }

    public String getItemNo() {
        return itemNo;
    }

    public void setItemNo(String itemNo) {
        this.itemNo = itemNo;
    }

    public String getItemCategory() {
        return itemCategory;
    }

    public void setItemCategory(String itemCategory) {
        this.itemCategory = itemCategory;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(float unitPrice) {
        this.unitPrice = unitPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
