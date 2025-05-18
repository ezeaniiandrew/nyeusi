import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout";
import { About, Contact, Home, Projects, ProjectDetail } from "@/pages";

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
        path: "projects/:projectId",
        element: <ProjectDetail />,
      },
    ],
  },
]);

export default router;
