import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route";
import ContextProvider from "./ContextProvider/ContextProvider";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Player } from "@lottiefiles/react-lottie-player";
import lottie from './assets/Lottie.json';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <RouterProvider
          fallbackElement={
            <div className="flex min-h-screen my-auto items-center justify-center">
              <Player
                autoplay
                loop
                src={lottie}
                style={{ height: '300px', width: '300px' }}
              />
            </div>
          }
          router={router}
        />
      </HelmetProvider>
    </ContextProvider>
    <ToastContainer />
  </React.StrictMode>
);
