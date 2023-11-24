import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router/Router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import { AnimatePresence } from "framer-motion";



ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <AnimatePresence>
          <RouterProvider router={Router}/>
        </AnimatePresence>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
