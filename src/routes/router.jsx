import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/About/AboutUs";
import Mission from "../Pages/About/About/Mission";
import AboutLayout from "../Layout/AboutLayout";
import Story from "../Pages/About/About/Story";
import Team from "../Pages/About/About/Team";
import Success from "../Pages/About/About/Success";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import Rider from "../Pages/Rider/Rider";
import ForgetPassword from "../Pages/Auth/ForgetPassword/ForgetPassword";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layout/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCanclled from "../Pages/Dashboard/Payment/PaymentCanclled";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index : true , Component: Home
        },
        {
            path:"/coverage",
            Component:Coverage,
            loader : ()=> fetch("/serviceCenters.json").then(res => res.json())
        },
        {
          path:'/about',
          Component: AboutUs
        },
        {
          path:"/rider",
          element: <PrivetRoutes>
            <Rider></Rider>
          </PrivetRoutes>
        },
        {
          path:"/send-parcel",
          element:<PrivetRoutes>
            <SendParcel></SendParcel>
          </PrivetRoutes>,
          loader : ()=> fetch("/serviceCenters.json").then(res => res.json())          
        }
    ]
  },
  {
    path:"/",
    Component: AuthLayout,
    children:[
      {
        path:"/login",
        Component: Login
      },
      {
        path:"/register",
        Component: Register
      },
        {
          path:"/forget-password",
          Component:ForgetPassword
        }
        
    ]
  },
  {
    path:"/dashboard",
    element: <PrivetRoutes><DashboardLayout></DashboardLayout></PrivetRoutes>,
    children:[
      {
        path:"my-parcels",
        Component: MyParcels
      },
      {
        path:"payment/:parcelId",
        Component: Payment
      },
      {
        path:"payment-success",
        Component: PaymentSuccess
      },
      {
        path:"payment-cancelled",
        Component: PaymentCanclled
      }
    ]
  }




  ,
  {
    path:"/about",
    Component: AboutLayout,
    children :[
      {
        path:"/about/mission",
        Component : Mission
      },
      {
        path:"/about/story",
        Component : Story
      },
      {
        path:"/about/success",
        Component : Success
      },
      {
        path:"/about/team",
        Component : Team
      },

    ]
  }
]);