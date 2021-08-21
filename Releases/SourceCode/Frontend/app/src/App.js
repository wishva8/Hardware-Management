import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard"
import OrderList from "./Pages/OrderList/OrderList";
import DriverCreate from './Pages/Driver/DriverCreate';
import DriverUpdate from './Pages/Driver/DriverUpdate';
import AddUser from './Pages/User/AddUser';
import DriverList from './Pages/Driver/DriverList';
import UserLogin from "./Pages/User/UserLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/orderList">
            <OrderList/>
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
          <Route path="/userLogin">
            <UserLogin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
