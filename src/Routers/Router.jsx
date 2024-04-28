import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Components/Error";
import Dashboard from "../Dashboard/Dashboard";
import AdvancedTables from "../Pages/Tables/AdvancedTables";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/advancedTables",
        element: <AdvancedTables />,
      },
    ],
  },
]);

export default Router;
