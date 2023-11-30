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
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AdminRoute from "../AdminRoute/AdminRoute";
import CreatorRoute from "../CreatorRoute/CreatorRoute";
import UpdateContest from "../../Pages/Dashboard/UpdateContest/UpdateContest";
import AllContest from "../../Pages/AllContest/AllContest";
import ContestDetails from "../../Pages/ContestDetails/ContestDetails";
import PaymentToRegister from "../../Pages/PaymentToRegister/PaymentToRegister";

import ExtraOne from "../../Pages/ExtraPageOne/ExtraOne";
import ExtraTwo from "../../Pages/ExtraPageTwo/ExtraTwo";

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
        path: "/allContest",
        element: <AllContest></AllContest>,
      },
      {
        path: "/contestDetails/:id",
        element: <ContestDetails></ContestDetails>,
        loader: ({ params }) =>
          fetch(
            `https://contest-hub-server-opal.vercel.app/contests/${params.id}`
          ),
      },
      {
        path: "paymentToRegister/:id",
        element: (
          <PrivateRoutes>
            <PaymentToRegister></PaymentToRegister>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://contest-hub-server-opal.vercel.app/contests/${params.id}`
          ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "one",
        element: <ExtraOne></ExtraOne>,
      },
      {
        path: "two",
        element: <ExtraTwo></ExtraTwo>,
      },
    ],
  },

  // dashboard route

  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "manageContest",
        element: (
          <AdminRoute>
            <ManageContest></ManageContest>
          </AdminRoute>
        ),
      },
      {
        path: "updateContest/:id",
        element: (
          <PrivateRoutes>
            <UpdateContest></UpdateContest>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://contest-hub-server-opal.vercel.app/contests/${params.id}`
          ),
      },

      //creator routes
      {
        path: "creatorHome",
        element: (
          <CreatorRoute>
            <CreatorHome></CreatorHome>
          </CreatorRoute>
        ),
      },
      {
        path: "addContest",
        element: (
          <CreatorRoute>
            <AddContest></AddContest>
          </CreatorRoute>
        ),
      },
      {
        path: "createdContest",
        element: (
          <CreatorRoute>
            <CreatedContest></CreatedContest>
          </CreatorRoute>
        ),
      },
      {
        path: "contestSubmitted",
        element: (
          <CreatorRoute>
            <ContestSubmitted></ContestSubmitted>
          </CreatorRoute>
        ),
      },

      // user routes
      {
        path: "userHome",
        element: (
          <PrivateRoutes>
            <UserHome></UserHome>
          </PrivateRoutes>
        ),
      },
      {
        path: "myProfile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },

      {
        path: "participateContest",
        element: (
          <PrivateRoutes>
            <ParticipateContest></ParticipateContest>
          </PrivateRoutes>
        ),
      },
      {
        path: "winingContest",
        element: (
          <PrivateRoutes>
            <WiningContest></WiningContest>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Router;
