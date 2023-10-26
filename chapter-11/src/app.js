import React, { Children, Suspense, lazy, useState } from "react";
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
import Profile from "./components/ProfileClass";
import UserContext from "./utils/UserContext";
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

const Instamart = lazy(()=>import('./components/Instamart'))

const AppLayout = () =>{

    const [user,setUser] = useState({name:'superman',email:'superman@gmail.com'})

    return (
        <UserContext.Provider value={{user:user,setUser}}>
            <Header />
            <Outlet />
            <Footer/>
         </UserContext.Provider> 
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
            },
            {
                path:'instamart',
                element: <Suspense> <Instamart /></Suspense>
            },
        ]
    },
    {
        element:<Profile />,
        path:"/profile"
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)