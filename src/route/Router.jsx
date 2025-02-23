import {
  createBrowserRouter
} from "react-router-dom";
// import Root from "../root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

import Root from "../root/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Dashborad from "../pages/Dashborad/Dashborad";
import Profile from "../pages/Dashborad/Profile/Profile";
import ManageBanner from "../pages/Dashborad/ManageBanner/ManageBanner";
import ManageReview from "../pages/Dashborad/ManageReview/ManageReview";
import DashboardInfo from "../pages/Dashborad/DashboardInfo/DashboardInfo";
import AddBanner from "../pages/Dashborad/AddBanner/AddBanner";
import AllUser from "../pages/Dashborad/DashboardInfo/AllUser/AllUser";


export  const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
  ]
  },
  {
    path:'/dashboard',
    element:<Dashborad></Dashborad>,
    children:[
      {
      path:'profile',
      element:<Profile></Profile>
    },
    {
      path:'manageBanner',
      element:<ManageBanner></ManageBanner>
    },
    {
      path:'manageReview',
      element:<ManageReview></ManageReview>
    },
    {
      path:'addBanner',
      element:<AddBanner></AddBanner>
    },
    {
      path:'',
      element:<DashboardInfo></DashboardInfo>
    },
    {
      path:'allUser',
      element:<AllUser></AllUser>
    }
  ]
  }
]);