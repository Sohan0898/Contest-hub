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
import CreatedContest from "../../Pages/Dashboard/Creator/CreatedContest/CreatedContest";
import ContestSubmitted from "../../Pages/Dashboard/Creator/ContestSubmitted/ContestSubmitted";
import ManageContest from "../../Pages/Dashboard/Admin/ManageContest/ManageContest";
import MyProfile from "../../Pages/Dashboard/User/MyProfile/MyProfile";
import ParticipateContest from "../../Pages/Dashboard/User/ParticipateContest/ParticipateContest";
import WiningContest from "../../Pages/Dashboard/User/WiningContest/WiningContest";



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
      // admin routes
      {
        path: "allUser",
        element: <AllUser></AllUser>,
      },
      
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageContest",
        element: <ManageContest></ManageContest>,
      },



      //creator routes
      {
        path: "creatorHome",
        element: <CreatorHome></CreatorHome>,
      },


      {
        path: "addContest",
        element: <AddContest></AddContest>,
      },
      {
        path: "createdContest",
        element: <CreatedContest></CreatedContest>,
      },
      {
        path: "contestSubmitted",
        element: <ContestSubmitted></ContestSubmitted>,
      },


      // user routes
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "participateContest",
        element: <ParticipateContest></ParticipateContest>,
      },
      {
        path: "winingContest",
        element: <WiningContest></WiningContest>,
      },
    ],
  },
]);

export default Router;
