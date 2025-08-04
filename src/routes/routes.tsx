import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import { adminPaths } from "./admin.routes";
import { routesGenerators } from "../utils/routesGenerators";


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
    children: routesGenerators (adminPaths)
  },
  {
    path: "/faculty",
    element: <App />,
    // element: <AdminLayout />,
    children: routesGenerators (adminPaths)
  },
  {
    path: "/student",
    element: <App />,
    // element: <AdminLayout />,
    children: routesGenerators (adminPaths)
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
