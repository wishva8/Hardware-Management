import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard"
import OrderList from "./Pages/OrderList/OrderList";
import DriverCreate from './Pages/Driver/DriverCreate';
import DriverUpdate from './Pages/Driver/DriverUpdate';
import AddUser from './Pages/User/AddUser';
import DriverList from './Pages/Driver/DriverList';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
