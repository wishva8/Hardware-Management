package com.hardwaremanagement.app.model;

import javax.persistence.*;

@Entity
@Table(name = "deliveries")
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int deliveryNo;

    @Column(name = "order_no")
    private int orderNo;

    @Column(name = "description")
    private String description;

    @Column(name = "address")
    private String address;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "customer_phone")
    private String customerPhoneNumber;

    @Column(name = "d_status")
    private boolean status;

    public Delivery(int deliveryNo, int orderNo, String description, String address, String customerName, String customerPhoneNumber, boolean status) {
        this.deliveryNo = deliveryNo;
        this.orderNo = orderNo;
        this.description = description;
        this.address = address;
        this.customerName = customerName;
        this.customerPhoneNumber = customerPhoneNumber;
        this.status = status;
    }

    public Delivery() {
    }

    public int getDeliveryNo() {
        return deliveryNo;
    }

    public void setDeliveryNo(int deliveryNo) {
        this.deliveryNo = deliveryNo;
    }

    public int getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(int orderNo) {
        this.orderNo = orderNo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerPhoneNumber() {
        return customerPhoneNumber;
    }

    public void setCustomerPhoneNumber(String customerPhoneNumber) {
        this.customerPhoneNumber = customerPhoneNumber;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
