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
import lottie from "./assets/Lottie.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider
            fallbackElement={
              <div className="flex min-h-screen my-auto items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={lottie}
                  style={{ height: "300px", width: "300px" }}
                />
              </div>
            }
            router={router}
          />
        </HelmetProvider>
      </QueryClientProvider>
    </ContextProvider>
    <ToastContainer />
  </React.StrictMode>
);
