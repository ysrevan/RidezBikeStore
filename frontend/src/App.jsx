import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Faq from './pages/Faq'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import About from './pages/About'
import Home from './pages/Home'
import Layout from './components/layout/Layout'
import Basket from './pages/basket/Basket'
import Wishlist from './pages/wishlist/Wishlist'
import ProductDetail from './pages/productdetail/ProductDetail'

import { ToastContainer } from 'react-toastify'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import ForgotPassword from './pages/auth/forgotpassword/ForgotPassword'
import Resetpassword from './pages/auth/resetpassword/Resetpassword'
import Admin from './pages/admin/Admin'
import AdminBlog from './pages/admin/AdminBlog'

function App() {
  const router = createBrowserRouter([
   
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'shop',
          element: <Shop />
        },
        {
          path: 'faq',
          element: <Faq />
        },
        {
          path: 'basket',
          element: <Basket />
        },
        {
          path: 'wishlist',
          element: <Wishlist />
        },
        {
          path: 'productdetail/:id',
          element: <ProductDetail />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: "/forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "/resetpassword",
          element: <Resetpassword />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/adminblog",
          element: <AdminBlog />,
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
