import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Business from "./pages/bussines/index.tsx";
import EntertainmentPage from "./pages/entertainment/index.tsx";
import HealthPage from "./pages/health/index.tsx";
import SciencePage from "./pages/science/index.tsx";
import SportsPage from "./pages/sports/index.tsx";
import TechnologyPage from "./pages/technology/index.tsx";
import ErrorPage from "./pages/404/index.tsx";
import LifestylePage from "./pages/lifestyle/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LifestylePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bussines",
    element: <Business />,
  },
  {
    path: "/entertainment",
    element: <EntertainmentPage />,
  },
  {
    path: "/health",
    element: <HealthPage />,
  },
  {
    path: "/science",
    element: <SciencePage />,
  },
  {
    path: "/sports",
    element: <SportsPage />,
  },
  {
    path: "/technology",
    element: <TechnologyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
