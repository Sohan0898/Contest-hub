import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router/Router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import { AnimatePresence } from "framer-motion";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <AuthProvider>
      <Toaster/>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AnimatePresence>
          <div className="font-montserrat ">
          <RouterProvider router={Router}/>
          </div>
        </AnimatePresence>
      </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
