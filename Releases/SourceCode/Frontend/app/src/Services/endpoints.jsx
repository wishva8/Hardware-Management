// import { baseURL } from "."

//Base URL
export const baseURL = "http://localhost:9091/";

//Oder APIs
export const orderControllerURL = baseURL + "orders/";
export const orderURL = orderControllerURL + "allOrders";
export const addOrderURL = orderControllerURL + "addOrder";
export const deleteOrderURL = orderControllerURL + "deleteOrderById/";

//Driver APIs
export const driverControllerURL = baseURL + "driver/";
export const driverURL = driverControllerURL + "allDrivers";
export const addDriverURL = driverControllerURL + "addDriver";
export const deleteDriverURL = driverControllerURL + "deleteDriverById/";

//Inventory APIs
export const inventoryControllerURL = baseURL + "inventory/";
export const inventoryURL = inventoryControllerURL + "allInventory";
export const addinventoryURL = inventoryControllerURL + "addItem";
export const getInventoryURLbyID = inventoryControllerURL + "getInventoryById/";
export const updateInventoryURL =
  inventoryControllerURL + "updateInventoryDetails";
export const deleteInventoryURL =
  inventoryControllerURL + "deleteInventoryById/";

//Delivery APIs
export const deliveryControllerURL = baseURL + "delivery/";
export const deliveryURL = deliveryControllerURL + "allDeliveries";
export const addDeliveryURL = deliveryControllerURL + "addDelivery";
export const deleteDeliveryURL = deliveryControllerURL + "deleteDeliveryById/";
