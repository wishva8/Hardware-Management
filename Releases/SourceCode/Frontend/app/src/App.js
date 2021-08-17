import logo from './logo.svg';
import './App.css';
import SideNav from './Components/SideNav/SideNav';
import DriverCreate from './Pages/Driver/DriverCreate';
import DriverUpdate from './Pages/Driver/DriverUpdate';

function App() {
  return (
    <div>
      {/* <SideNav/> */}
      <DriverCreate/>
      <DriverUpdate/>
    </div>
  );
}

export default App;
