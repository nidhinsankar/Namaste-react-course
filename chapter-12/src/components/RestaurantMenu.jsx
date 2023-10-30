import { useParams } from "react-router-dom"
import { MENU_TYPE_KEY, RESTAURANT_TYPE_KEY, SWIGGY_MENU_API, SWIGYY_IMG_CDN } from "../../constants"
import { useEffect, useState } from "react"
import { ShimmerBanner, ShimmerMenu } from "./Shimmer"
import { useRestaurantMenu } from "../utils/useFetch"
import FoodCard from "./FoodCard"


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
                <div className="min-h-[calc(100vh - 100px)] mt-24">
            <div className="bg-[#171717] text-[#f6f6f6] h-[200px]">
                <div className="h-full w-[60%] mx-auto flex">
                    <img className="w-[40%]" src={SWIGYY_IMG_CDN+restaurantData?.cloudinaryImageId} alt={restaurantData?.name} />
                    <div className="w-[50%] p-3">
                        <h2 className="text-4xl font-extrabold mb-4">{restaurantData?.name}</h2>
                        <div className="">{restaurantData?.cuisines?.map(cuisine => (
                            <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{cuisine}</span>
                            ))}
                        </div>
                        <div className="flex justify-around items-center">
                            <p>{restaurantData?.avgRating}</p>
                            <p>{restaurantData?.costForTwoMessage}</p>
                            <p>{restaurantData?.areaName}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-items-listing">
                <div className="w-[60%] mx-auto">
                    {menuItems?.map(menu => (
                        <FoodCard {...menu} />    
                    ))}
                </div>
            </div>
            </div>
            )}
        </>
        
    )
}

export default RestaurantMenu