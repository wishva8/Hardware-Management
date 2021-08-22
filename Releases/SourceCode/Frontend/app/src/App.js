import { Route, Switch, BrowserRouter } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
          <Route path="/userLogin">
            <UserLogin />
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
