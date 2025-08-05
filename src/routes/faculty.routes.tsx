import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferCourse from "../pages/faculty/OfferCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offer Course",
    path: "offer-course",
    element: <OfferCourse />,
  },
];
