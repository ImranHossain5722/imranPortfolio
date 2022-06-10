
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Components/Header/NavBar';
import Home from './Components/Home/Home';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import Manufacturer from './Components/ManufacturerProjectDetail/Manufacturer';

function App() {
  return (
    <div className="App">
       <NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='contact' element={<ContactMe/>}></Route>
          <Route path='ManufacturerDetail' element={<Manufacturer/>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer/>
       </NavBar>
    </div>
  );
}

export default App;
