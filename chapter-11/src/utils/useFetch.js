import { useEffect, useState } from "react"
import { MENU_TYPE_KEY, RESTAURANT_TYPE_KEY, SWIGGY_API, SWIGGY_MENU_API } from "../../constants"


export const useRestaurants = () => {
    const [fetchData,setFetchData] = useState(null)

    const apiFetch = async() =>{
        try {
            const jsonData = await fetch(SWIGGY_API)
            const resData =  await jsonData?.json()
            setFetchData(resData?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            console.log(resData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        apiFetch()
    },[])

    return fetchData
}

export const useRestaurantMenu = (restaurantId) =>{

    const [fetchRestaurantData,setFetchRestaurantData] = useState(null)
    const [fetchMenuData,setFetchMenuData] = useState([])

    const apiFetch = async() => {
        const response = await fetch(SWIGGY_MENU_API+restaurantId)
        const json = await response?.json()
        const resData = json?.data?.cards?.map(x => x.card)?.find(x => x && x?.card['@type'] == RESTAURANT_TYPE_KEY)?.card?.info || null
        setFetchRestaurantData(resData);
        const menuData = json?.data?.cards?.find(x => x?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x?.card?.card)?.filter(x => x['@type'] === MENU_TYPE_KEY)?.map(x => x.itemCards).flat().map(x => x.card?.info)
        setFetchMenuData(menuData);
    }

    useEffect(()=>{
        apiFetch()
    },[])


    return [fetchRestaurantData,fetchMenuData]

}