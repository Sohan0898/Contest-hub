import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Root from "../../MainLayout/Root/Root";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import DashBoard from "../../MainLayout/DashBoard/DashBoard";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import UserHome from "../../Pages/Dashboard/User/UserHome/UserHome";
import AdminHome from "../../Pages/Dashboard/Admin/AdminHome/AdminHome";
import CreatorHome from "../../Pages/Dashboard/Creator/CreatorHome/CreatorHome";
import AddContest from "../../Pages/Dashboard/Creator/AddContest/AddContest";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },

  // dashboard route

  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      // normal user routes
      {
        path: "allUser",
        element: <AllUser></AllUser>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "creatorHome",
        element: <CreatorHome></CreatorHome>,
      },
      {
        path: "addContest",
        element: <AddContest></AddContest>,
      },
    ],
  },
]);

export default Router;
