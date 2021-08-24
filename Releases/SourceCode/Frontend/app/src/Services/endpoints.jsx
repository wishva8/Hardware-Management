// import { baseURL } from "."

//Base URL
export const baseURL = "http://localhost:9091/";

//Oder APIs
export const orderControllerURL = baseURL + "orders/";
export const orderURL = orderControllerURL + "allOrders";
export const addOrderURL = orderControllerURL + "addOrder";

//Driver APIs
export const driverControllerURL = baseURL + "driver/";
export const driverURL = driverControllerURL + "allDrivers";
export const addDriverURL = driverControllerURL + "addDriver";

//Inventory APIs
export const inventoryControllerURL = baseURL + "inventory/";
export const inventoryURL = inventoryControllerURL + "allInventory";
export const addinventoryURL = inventoryControllerURL + "addItem";
