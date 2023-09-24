import { useParams } from "react-router-dom"
import { MENU_TYPE_KEY, RESTAURANT_TYPE_KEY, SWIGGY_MENU_API, SWIGYY_IMG_CDN } from "../../constants"
import { useEffect, useState } from "react"
import { ShimmerBanner, ShimmerMenu } from "./Shimmer"


const RestaurantMenu = () => {

    const { restaurantId } = useParams()
    const [restaurantData,setRestaurantData] = useState(null)
    const [menuItems,setMenuItems] = useState([])

    // console.log('restaurantID',restaurantId);
    // console.log(restaurantData);
    console.log(menuItems);

    useEffect(()=>{
        getRestaurantMenu()
    },[])
    const getRestaurantMenu = async() => {
        const response = await fetch(SWIGGY_MENU_API+restaurantId)
        const json = await response?.json()
        const resData = json?.data?.cards?.map(x => x.card)?.find(x => x && x?.card['@type'] == RESTAURANT_TYPE_KEY)?.card?.info || null
        setRestaurantData(resData);
        const menuData = json?.data?.cards?.find(x => x?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x?.card?.card)?.filter(x => x['@type'] === MENU_TYPE_KEY)?.map(x => x.itemCards).flat().map(x => x.card?.info)
        setMenuItems(menuData);
    }

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