import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../../../public/fabicon.png";
import { GoHomeFill } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { AiOutlineRollback } from "react-icons/ai";
import { MdAddToPhotos } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { RiTaskFill } from "react-icons/ri";
import { MdManageHistory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import useCreator from "../../Hooks/useCreator";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { TbLogout2 } from "react-icons/tb";

const DashBoard = () => {
  const navigate = useNavigate();

  const [isAdmin] = useAdmin();

  const [isCreator] = useCreator();

  const { logOut, user } = useAuth();

  const handleLogOut = () => {
    logOut();
    toast.success(
      `${user?.displayName
        .split(/\s+/)

        .slice(0, 1)
        .join(" ")} has successfully sign-out`
    );
    navigate("/").then(() => console.log("Sign-out successful"));
  };

  return (
    <div>
      <Helmet>
        <title>Contest Hub | Dashboard </title>
      </Helmet>
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
          <ul className="menu mt-8 lg:p-4 text-xl  md:text-sm lg:text-md text-white">
            {/* routes */}

            {isAdmin ? (
              // Admin
              <>
                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/adminHome">
                    <GoHomeFill></GoHomeFill>
                    <h1 className="hidden md:flex">Admin Home</h1>
                  </NavLink>
                </li>
                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/allUser">
                    <FaUsers></FaUsers>
                    <h1 className="hidden md:flex">Manage Users</h1>
                  </NavLink>
                </li>
                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/manageContest">
                    <MdManageHistory></MdManageHistory>
                    <h1 className="hidden md:flex">Manage Contest</h1>
                  </NavLink>
                </li>
              </>
            ) : isCreator ? (
              <>
                {/* creator*/}
                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/creatorHome">
                    <GoHomeFill></GoHomeFill>
                    <h1 className="hidden md:flex">Creator Home</h1>
                  </NavLink>
                </li>
                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/addContest">
                    <MdAddToPhotos></MdAddToPhotos>
                    <h1 className="hidden md:flex">Add Contest</h1>
                  </NavLink>
                </li>

                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/createdContest">
                    <IoCreateSharp></IoCreateSharp>
                    <h1 className="hidden md:flex">My Contest</h1>
                  </NavLink>
                </li>
                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/contestSubmitted">
                    <RiTaskFill></RiTaskFill>
                    <h1 className="hidden md:flex">Contest Sumission</h1>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/userHome">
                    <GoHomeFill></GoHomeFill>
                    <h1 className="hidden md:flex">User Home</h1>
                  </NavLink>
                </li>
                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/myProfile">
                    <CgProfile></CgProfile>
                    <h1 className="hidden md:flex">My Profile</h1>
                  </NavLink>
                </li>
                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/participateContest">
                    <AiOutlineFileDone></AiOutlineFileDone>
                    <h1 className="hidden md:flex">Participated Contest</h1>
                  </NavLink>
                </li>
                <li className="mx-auto md:mx-0">
                  <NavLink to="/dashboard/winingContest">
                    <FaTrophy></FaTrophy>
                    <h1 className="hidden md:flex">Wining Contest</h1>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider divider-info mt-5  "></div>

            <li className="mx-auto   md:mx-0">
              <NavLink to="/">
                <AiOutlineRollback></AiOutlineRollback>
                <h1 className="hidden md:flex">Go Home</h1>
              </NavLink>
            </li>
            <li className="mx-auto   md:mx-0">
              <button onClick={handleLogOut}>
                <TbLogout2></TbLogout2> Logout
              </button>
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
