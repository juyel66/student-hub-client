const { Children } = require("react");

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: 'ADMIN_DASHBOARD',
  },
  {
    name: "User Management",
    Children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: 'CREAT_ADMIN',
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: 'CREATE_FACULTY'
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: 'CREATE_STUDENT',
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
 
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NAVLINK",
    });
  }


  if (item.Children) {
  acc.push({
    key: item.name,
    label: item.name,
    Children: item.children.map((child) => ({
      key: child.name,
      label: "NAVLINK",
    }))
  })
  }

  return acc;
}, []);



// const newArray = adminPaths2.reduce((acc, item) => {
 
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }


//   if (item.Children) {
//     item.Children.forEach(child => {
//       if (child.path && child.element) {
//         acc.push({
//           path: child.path,
//           element: child.element,
//         });
//       }
//     });
//   }

//   return acc;
// }, []);

console.log(newArray);
