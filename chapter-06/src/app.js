import React from "react";
import ReactDOM  from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
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
            <Body/>
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)