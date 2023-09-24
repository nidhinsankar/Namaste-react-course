import React, { Children } from "react";
import ReactDOM  from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Login from "./components/Login";
/**
 * HEADER
 *   - Logo
 *   - Navbar links
 * BODY
 *   - RestaurentList
 *   - RestaurentCard
 *       - image
 *       - name
 *       - rating
 *       - deliveryTime
 * FOOTER
 *    - copyrights of the website
 */

const AppLayout = () =>{

    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}


const appRouter = createBrowserRouter([
    {
        element:<AppLayout/>,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/about',
                element:<About />   
            },
            {
                path:'/contact-us',
                element:<ContactUs />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/restaurant/:restaurantId',
                element:<RestaurantMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)