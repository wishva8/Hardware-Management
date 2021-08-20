import logo from './logo.svg';
import './App.css';
import SideNav from './Components/SideNav/SideNav';
import DriverCreate from './Pages/Driver/DriverCreate';
import DriverUpdate from './Pages/Driver/DriverUpdate';
import AddUser from './Pages/User/AddUser';
import DriverList from './Pages/Driver/DriverList';

function App() {
  return (
    <div>
      {/* <SideNav/> */}
      <DriverCreate/>
      <DriverUpdate/>
      <AddUser/>
      {/* <DriverList/> */}
    </div>
  );
}

export default App;
