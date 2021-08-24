// import { baseURL } from "."

export const baseURL = "http://localhost:9091/";
export const orderControllerURL = baseURL + "orders/";
export const orderURL = orderControllerURL + "allOrders";
export const addOrderURL = orderControllerURL + "addOrder";

export const driverControllerURL = baseURL + "driver/";
export const driverURL = driverControllerURL + "allDrivers";
export const addDriverURL = driverControllerURL + "addDriver";

export const inventoryControllerURL = baseURL + "inventory/";
export const inventoryURL = inventoryControllerURL + "allInventory";
export const addInventoryURL = inventoryControllerURL + "addItem";
