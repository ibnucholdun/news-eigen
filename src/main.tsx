import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/lifestyle/App.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Business from "./pages/bussines/index.tsx";
import EntertainmentPage from "./pages/entertainment/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bussines",
    element: <Business />,
  },
  {
    path: "/entertainment",
    element: <EntertainmentPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
