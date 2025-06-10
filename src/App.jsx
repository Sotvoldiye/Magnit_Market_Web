import React, { useState, useEffect } from "react";
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
import CategoryList from "./pages/CategoryList/CategoryList";
import AllComent from "./components/AllComent/AllComent";
import toast, { Toaster } from 'react-hot-toast';
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() {
  const user = true;
  const [showSplash, setShowSplash] = useState(false);
  

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <PRotectedRoutes user={user}>
          <MainLayout />
        </PRotectedRoutes>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/maxsulot/:id", element: <Product /> },
        { path: "/maxsulotlar", element: <ProductList /> },
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


  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (!hasSeenSplash) {
      setShowSplash(true);
      sessionStorage.setItem("hasSeenSplash", "true");

      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);


     if (showSplash) {
      return <SplashScreen />;
    }


  return (
    <>

        <RouterProvider router={routes} />
      
    </>
  );
}

export default App;
