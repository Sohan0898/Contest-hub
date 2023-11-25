import { NavLink, Outlet } from "react-router-dom";
import logo from "../../../public/fabicon.png";
import { GoHomeFill } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { AiOutlineRollback } from "react-icons/ai";
import { MdAddToPhotos } from "react-icons/md";


const DashBoard = () => {
  return (
    <div>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-20 md:w-40 lg:w-64 min-h-screen bg-third">
          <div className=" flex items-center justify-center mt-8">
            <img
              className="h-9 md:h-6 lg:h-9  lg:flex mr-1"
              src={logo}
              alt=""
            />
            <h1 className="text-white hidden md:flex lg:text-2xl">
              CONTEST<span className="text-primary font-normal">Hub</span>
            </h1>{" "}
          </div>
          <ul className="menu mt-8 lg:p-4 text-xl  md:text-sm lg:text-lg text-white">
            {/* routes */}
            <li className="mx-auto lg:mx-0">
              <NavLink to="/dashboard/adminHome">
                <GoHomeFill ></GoHomeFill>
                <h1 className="hidden md:flex">Admin Home</h1>
              </NavLink>
            </li>
            <li className="mx-auto lg:mx-0">
              <NavLink to="/dashboard/creatorHome">
                <GoHomeFill ></GoHomeFill>
                <h1 className="hidden md:flex">Creator Home</h1>
              </NavLink>
            </li>
            <li className="mx-auto lg:mx-0">
              <NavLink to="/dashboard/userHome">
                <GoHomeFill ></GoHomeFill>
                <h1 className="hidden md:flex">User Home</h1>
              </NavLink>
            </li>
            
            <li className="mx-auto lg:mx-0">
              <NavLink to="/dashboard/allUser">
              <FaUsers></FaUsers>
                <h1 className="hidden md:flex">Users</h1>
              </NavLink>
            </li>

            <li className="mx-auto lg:mx-0">
              <NavLink to="/">
                <AiOutlineRollback ></AiOutlineRollback>
                <h1 className="hidden md:flex">Go Home</h1>
              </NavLink>
            </li>

            <li className="mx-auto lg:mx-0">
              <NavLink to="/dashboard/addContest">
                <MdAddToPhotos ></MdAddToPhotos>
                <h1 className="hidden md:flex">Add Contest</h1>
              </NavLink>
            </li>
            
          </ul>
        </div>

        {/* dashboard content */}
        <div className="flex-1 px-8 py-5 bg-gray-300">
          <div className="w-full h-16 md:h-10 lg:h-16 bg-third shadow-md rounded "></div>

          {/* dashboard content */}
          
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
