import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import SideNav from './Components/SideNav/SideNav';
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <SideNav />
          <Route path="">
            <AdminDashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
