package com.hardwaremanagement.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "drivers")
public class Driver {

    @Id
    private String licenceNo;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "vehicle_no")
    private String vehicleNo;

    @Column(name = "vehicle_type")
    private String vehicleType;

    @Column(name = "phone_no")
    private String phoneNo;

    public Driver() {
    }

    public Driver(String licenceNo, String name, String address, String vehicleNo, String vehicleType, String phoneNo) {
        this.licenceNo = licenceNo;
        this.name = name;
        this.address = address;
        this.vehicleNo = vehicleNo;
        this.vehicleType = vehicleType;
        this.phoneNo = phoneNo;
    }

    public String getLicenceNo() {
        return licenceNo;
    }

    public void setLicenceNo(String licenceNo) {
        this.licenceNo = licenceNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getVehicleNo() {
        return vehicleNo;
    }

    public void setVehicleNo(String vehicleNo) {
        this.vehicleNo = vehicleNo;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }
}
