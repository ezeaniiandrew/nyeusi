import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Projects from "@/pages/Projects/Projects";
import Hire from "@/pages/Hire/Hire";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "hire",
        element: <Hire />,
      },
    ],
  },
]);

export default router;
