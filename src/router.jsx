import { createBrowserRouter } from "react-router";
import DashboardLayout from "./components/Layout/DashboardLayout";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Users from "./Pages/Users/Users";
import Categiries from "./Pages/Categories/Categories";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import CreateNewProduct from "./Pages/CreateNewProduct/CreateNewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "products", element: <Products /> },
      { path: "categiries", element: <Categiries /> },
      { path: "createNewProduct", element: <CreateNewProduct /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
