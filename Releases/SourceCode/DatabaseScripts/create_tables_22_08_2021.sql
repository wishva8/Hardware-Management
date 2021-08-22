
CREATE TABLE IF NOT EXISTS inventories(

inventoryNo INT(10) NOT NULL AUTO_INCREMENT,
item_no VARCHAR(20) NOT NULL,
item_category VARCHAR(20) NOT NULL,
item_description VARCHAR(50) NOT NULL,
unit_price FLOAT NOT NULL,
item_quantity INT NOT NULL,

PRIMARY KEY (inventoryNo)
);

CREATE TABLE IF NOT EXISTS orders(
  order_id INT(10) NOT NULL AUTO_INCREMENT,
  order_description VARCHAR(200) NOT NULL,
  item_id VARCHAR(20) NOT NULL,
  quantity INT(20) NOT NULL,
  unit_price FLOAT NOT NULL,
  total_price FLOAT NOT NULL,
  order_date DATE NOT NULL,
  customer_name VARCHAR(20) NOT NULL,
  customer_phone VARCHAR (10) NOT NULL,
  order_status BOOLEAN NOT NULL,
  
  PRIMARY KEY (order_id)
);

CREATE TABLE IF NOT EXISTS deliveries(
delivery_no INT AUTO_INCREMENT NOT NULL,
order_no INT(10) NOT NULL,
description VARCHAR(50) NOT NULL,
address VARCHAR(50) NOT NULL,
customer_name VARCHAR(50) NOT NULL,
customer_phone VARCHAR(50) NOT NULL,
d_status boolean NOT NULL,

PRIMARY KEY(delivery_no)
);

CREATE TABLE IF NOT EXISTS drivers(
licence_no VARCHAR(20) NOT NULL,
name VARCHAR(20) NOT NULL,
address VARCHAR(50) NOT NULL,
vehicle_no VARCHAR(10) NOT NULL,
vehicle_type VARCHAR(20) NOT NULL,
phone_no VARCHAR(10) NOT NULL,

PRIMARY KEY(licence_no)
);

CREATE TABLE IF NOT EXISTS users(
nic_no VARCHAR(20) NOT NULL,
name VARCHAR(20) NOT NULL,
address VARCHAR(500) NOT NULL,
user_type int NOT NULL,
email VARCHAR(30) NOT NULL,
phone_no VARCHAR(10) NOT NULL,

PRIMARY KEY(nic_no)
);


