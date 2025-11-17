import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import TestMenu from "../Pages/Test/Menu/TestMenu";
import Login from "../Pages/Login/Login";
// import Home from "../pages/Home/Home/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/testMenuenu',
            element: <TestMenu></TestMenu>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
      ]
    },
  ]);