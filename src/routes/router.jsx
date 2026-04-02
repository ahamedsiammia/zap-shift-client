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
        
    ]
  },
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