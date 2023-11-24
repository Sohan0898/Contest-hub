import { Outlet, useLocation } from "react-router-dom";
import Navber from "../../assets/Shared/Navbar/Navber";

const Root = () => {
  const location = useLocation();
  const noNav =
    location.pathname.includes("register") ||
    location.pathname.includes("login");

  return (
    <div className="font-montserrat ">
      {noNav || <Navber></Navber>}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
