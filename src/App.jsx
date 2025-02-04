import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./page/Home";
import Layout from "./component/Layout";
import ProjectLayout from "./component/ProjectLayout";
import Projects from "./page/Projects";
import "./App.css";
import ProjectDetail from "./page/ProjectDetail";
const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: "projects",
          element: <ProjectLayout />,
          children: [
            {
              index: true,
              element: <Projects />,
            },
            {
              path: ":id",
              element: <ProjectDetail />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
