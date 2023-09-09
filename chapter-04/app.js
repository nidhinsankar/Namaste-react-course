import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css'
import { restaurantLists } from "./constants";
import logo from './food-fire.jpg'

const header = <h1>{restaurantLists?.length}</h1>

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
console.log(restaurantLists);
const Title = () => {

    return (
        <img src={logo} width={"50px"} alt="logo" />
    )
}

const Header = () => {

    return (
        <div className="header-container">
            <Title />
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

const Body =() =>{
    return (
        <div className="restaurant-list">
            {restaurantLists?.map(restaurant => (
                <RestaurantCard {...restaurant?.info} />
            ))}
        </div>
    )
}

const Footer = () => {

    return (
        <footer>
            <strong>Food Fire</strong>
            <p>Created by</p>
            <b>REACT</b>
        </footer>
    )
}


const RestaurantCard = ({cloudinaryImageId,name,cuisines,locality}) => {

    return (
        <div className="restaurant-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="restaurant-photo" />
            <h2>{name}</h2>
            <p>{cuisines?.join(",")}</p>
            <p>{locality}</p>
        </div>
    )
}

const AppLayout = () =>{

    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)