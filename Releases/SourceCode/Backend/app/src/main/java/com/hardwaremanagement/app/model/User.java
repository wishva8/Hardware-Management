package com.hardwaremanagement.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    private String nicNo;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "user_type")
    private int userType;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_no")
    private String phoneNo;

    @Column(name = "password")
    private String password;

    public User() {
    }

    public User(String nicNo, String name, String address, int userType, String email, String phoneNo, String password) {
        this.nicNo = nicNo;
        this.name = name;
        this.address = address;
        this.userType = userType;
        this.email = email;
        this.phoneNo = phoneNo;
        this.password = password;
    }

    public String getNicNo() {
        return nicNo;
    }

    public void setNicNo(String nicNo) {
        this.nicNo = nicNo;
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

    public int getUserType() {
        return userType;
    }

    public void setUserType(int userType) {
        this.userType = userType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
