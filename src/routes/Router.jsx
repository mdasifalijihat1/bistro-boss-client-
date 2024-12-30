import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../main/MainLayout";
import Home from "../page/Home";
import ErrorPage from "../page/ErrorPage";
import ContactUs from "../page/ContactUs";
import Dashboard from "../page/Dashboard";
import OurMenu from "../page/OurMenu";
import Login from "../components/loginRegister/Login";
import Register from "../components/loginRegister/Register";
import ForgotPassword from "../components/loginRegister/ForgotPassword";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/forgetPassword',
        element:<ForgotPassword></ForgotPassword>,
      },
    ],
  },
]);
