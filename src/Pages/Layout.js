import { Outlet } from "react-router-dom";
/* import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; */
import logo from '../Assets/logo.png'


const Layout = () => {
  return (
    <div className="layout">
      <header>
        <figure className='logo-container'>
          <img src={logo} alt='schvarsity logo' />
        </figure>
      </header>
      
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;