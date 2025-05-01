import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Category, Product, ProductList, Login, Register, Home } from './pages'
import MainLayout from './layout/MainLayout'
import PRotectedRoutes from './components/PRotectedRoutes'
import { useSelector } from 'react-redux'
import store from './lib/store'

function App() {
  const user = useSelector((state) => state.user)
  const routes = createBrowserRouter([{
    
      path: "/",
    element:  <PRotectedRoutes user={user}><MainLayout /></PRotectedRoutes>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      },
      {
        path: '/product_list',
        element: <ProductList/>
      }, 
      {path: '/product_category',
        element: <Category/>}
    ]},
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
    { path: "/register", element: user ? <Navigate to="/" /> : <Register /> },

  ])
  return (
    <RouterProvider router={routes}/>)}

  
    
  


export default App