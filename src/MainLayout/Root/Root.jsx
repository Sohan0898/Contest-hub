import { Outlet, useLocation } from "react-router-dom";
import Navber from "../../assets/Shared/Navbar/Navber";
import Footer from "../../assets/Shared/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const noNav =
    location.pathname.includes("register") ||
    location.pathname.includes("login");

  return (
    <div className="bg-gray-100" >
      {noNav || <Navber></Navber>}
      <div className=' min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      {noNav || <Footer></Footer>}
      
    </div>
    
  );
};

export default Root;
