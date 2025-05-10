import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  Category,
  Product,
  ProductList,
  Login,
  Register,
  Home,
  Cart,
  Account,
  Favorute,
} from "./pages";
import MainLayout from "./layout/MainLayout";
import PRotectedRoutes from "./components/PRotectedRoutes";
import { useSelector } from "react-redux";
import store from "./lib/store";
import CategoryList from "./pages/CategoryList/CategoryList";
import AllComent from "./components/AllComent/AllComent";

function App() {
  const user = true; // useSelector((state) => state.user)
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <PRotectedRoutes user={user}>
          <MainLayout />
        </PRotectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/maxsulot/:id",
          element: <Product />,
        },
        {
          path: "/maxsulotlar",
          element: <ProductList />,
        },
        { path: "/maxsulot-turi", element: <Category /> },
        { path: "/maxsulot-turi/:slug", element: <CategoryList /> },
        { path: "/savatcha", element: <Cart /> },
        { path: "/account", element: <Account /> },
        { path: "/ajratilgn_maxulotlar", element: <Favorute /> },
        { path: "/comentlar", element: <AllComent /> },
      ],
    },
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
    { path: "/register", element: user ? <Navigate to="/" /> : <Register /> },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
