import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import OrderList from "./Pages/OrderList/OrderList";
import DriverCreate from "./Pages/Driver/DriverCreate";
import DriverUpdate from "./Pages/Driver/DriverUpdate";
import AddUser from "./Pages/User/AddUser";
import DriverList from "./Pages/Driver/DriverList";
import CreateItem from "./Pages/Inventory/CreateItem";
import UserLogin from "./Pages/User/UserLogin";
import InventoryList from "./Pages/Inventory/InventoryList";
import UpdateItems from "./Pages/Inventory/UpdateItems";
import CreateOrder from "./Pages/OrderList/CreateOrder";
import UpdateOrder from "./Pages/OrderList/UpdateOrder";
import CreateDelivery from "./Pages/Delivery/CreateDelivery";
import DeliveryList from "./Pages/Delivery/DeliveryList";
import UpdateDelivery from "./Pages/Delivery/UpdateDelivery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <UserLogin />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/dashboard">
            <AdminDashboard />
          </Route>
          <Route path="/createDriver">
            <DriverCreate />
          </Route>
          <Route path="/updateDriver">
            <DriverUpdate />
          </Route>
          <Route path="/driverList">
            <DriverList />
          </Route>
          <Route path="/addUser">
            <AddUser />
          </Route>
          <Route path="/createItem">
            <CreateItem />
          </Route>
          <Route path="/inventoryList">
            <InventoryList />
          </Route>
          <Route path="/updateItem">
            <UpdateItems />
          </Route>
          <Route path="/createOrder">
            <CreateOrder />
          </Route>
          <Route path="/updateOrder">
            <UpdateOrder />
          </Route>
          <Route path="/createDelivery">
            <CreateDelivery />
          </Route>
          <Route path="/deliveryList">
            <DeliveryList />
          </Route>
          <Route path="/updateDelivery">
            <UpdateDelivery />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
