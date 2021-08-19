import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard"
import OrderList from "./Pages/OrderList/OrderList";
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
