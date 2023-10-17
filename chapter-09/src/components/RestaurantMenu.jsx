import { useParams } from "react-router-dom"
import { MENU_TYPE_KEY, RESTAURANT_TYPE_KEY, SWIGGY_MENU_API, SWIGYY_IMG_CDN } from "../../constants"
import { useEffect, useState } from "react"
import { ShimmerBanner, ShimmerMenu } from "./Shimmer"
import { useRestaurantMenu } from "../utils/useFetch"


const RestaurantMenu = () => {

    const { restaurantId } = useParams()
    const [restaurantData,menuItems] = useRestaurantMenu(restaurantId)

    return (
        <>
            {restaurantData === null && menuItems === [] ? (
                <>
                    <ShimmerBanner /> 
                    <ShimmerMenu />
                </>
            ):(
                <div className="restaurant-menu-page">
            <div className="restaurant-info">
                <div className="restaurant-info-container">
                    <img className="restaurant-image" src={SWIGYY_IMG_CDN+restaurantData?.cloudinaryImageId} alt={restaurantData?.name} />
                    <div className="restaurant-details">
                        <h2>{restaurantData?.name}</h2>
                        <p>{restaurantData?.cuisines?.join(', ')}</p>
                        <div className="restaurant-info-details">
                            <p>{restaurantData?.avgRating}</p>
                            <p>{restaurantData?.costForTwoMessage}</p>
                            <p>{restaurantData?.areaName}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-items-listing">
                    <div className="restaurant-menu-container">
                    {menuItems?.map(menu => (
                        <div className="menu-card">
                            <div className="left-side">

                                <h2>{menu?.name}</h2>
                                <p>{menu?.description}</p>
                                <h2>{menu?.price > 0 ? new Intl.NumberFormat('en-IN',{
                                    style:'currency',
                                    currency:'INR'
                                }).format(menu?.price / 100) :'0'}</h2>
                            </div>
                            <div className="right-side">
                                <img src={SWIGYY_IMG_CDN+menu?.imageId} alt="food-image" className="menu-image" />
                                <button>ADD</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            )}
        </>
        
    )
}

export default RestaurantMenu