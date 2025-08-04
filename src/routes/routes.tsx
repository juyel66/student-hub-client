import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";

import {  adminRoutes } from "./admin.routes";
// import AdminLayout from "../components/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

//   admin routes  
  {
    path: "/admin",
    element: <App />,
    // element: <AdminLayout />,
    children: adminRoutes
  },
  {
    path: "/faculty",
    element: <App />,
    // element: <AdminLayout />,
    children: adminRoutes
  },
  {
    path: "/student",
    element: <App />,
    // element: <AdminLayout />,
    children: adminRoutes
  },


  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
