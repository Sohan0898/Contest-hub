import {
    createBrowserRouter,

  } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Root from "../../MainLayout/Root/Root";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
            path : "/",
        element: <Home></Home>,
        },
        {
            path : "/register",
        element: <Register></Register>,
        },
        {
            path : "/login",
        element: <Login></Login>,
        },
      ],
    },
  ]);

export default Router;