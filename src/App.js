
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Components/Header/NavBar';
import Home from './Components/Home/Home';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import Manufacturer from './Components/ManufacturerProjectDetail/Manufacturer';
import WareHouseDetails from './Components/CarSaleWarehouse/WareHouseDetails';
import SingleFitnessDetails from './Components/SingleFitnes/SingleFitnessDetails';
import WpProjectDetail from './Components/WpProject/WpProjectDetail';

function App() {
  return (
    <div className="App">
       <NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='contact' element={<ContactMe/>}></Route>
          <Route path='ManufacturerDetail' element={<Manufacturer/>}></Route>
          <Route path='warehouseDetails' element={<WareHouseDetails></WareHouseDetails> }></Route>
          <Route path='singleFitnessDetails' element={<SingleFitnessDetails></SingleFitnessDetails> }></Route>
          <Route path='wpProjectDetail' element={<WpProjectDetail></WpProjectDetail> }></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer/>
       </NavBar>
    </div>
  );
}

export default App;
