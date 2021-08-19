import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <AdminDashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
