import type { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";

type Trout =  {
  path: string;
  element: ReactNode;
}
type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[]
}

const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

//====================Hard Coded way ====================

// export const adminPaths = [
//   //   {
//   //     index: true,
//   //     element: <AdminDashboard />,
//   //   },
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
// ];




// Programmatically way 

export const adminRoutes = adminPaths.reduce((acc : Trout[], item) => {
  
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  // Children handle (corrected 'children')
  if (item.children) {
    item.children.forEach((child) => {
      if (child.path && child.element) {
        acc.push({
          path: child.path,
          element: child.element,
        });
      }
    });
  }

  return acc;
}, []);

console.log(adminRoutes);



// sidebar item 

export const adminSidebarItem = adminPaths.reduce((acc: TSidebarItem[], item) => {
 
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }


  if (item.children) {
  acc.push({
    key: item.name,
    label: item.name,
    children: item.children.map((child) => ({
      key: child.name,
      label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
    }))
  })
  }

  return acc;
}, []);
