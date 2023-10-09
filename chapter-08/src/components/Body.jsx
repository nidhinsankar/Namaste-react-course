import { useEffect, useState } from "react"
import { SHIMER_COUNT, SWIGGY_API } from "../../constants"
import RestaurantCard from "./RestaurantCard"
import { ShimmerCard } from "./Shimmer"


const filterData = (searchText,restaurants) => {
    return restaurants?.filter(restaurant => (
        restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    ))
}


const Body =() =>{
    const [allRestaurants,setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [searchText,setSearchText] = useState('')

    const fetchRestaurants = async() =>{
        try {
            const jsonData = await fetch(SWIGGY_API)
            const resData =  await jsonData?.json()
            setAllRestaurants(resData?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(resData?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)      
            // console.log(resData?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(resData);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        fetchRestaurants()
    },[])

    return (
        <main className="main-container">
                <div className="search-bar-container">
                    <input type="text" placeholder="Search..." className="search-bar" onChange={(e)=>setSearchText(e.target.value)} />
                    <button onClick={()=>{
                        const data = filterData(searchText,allRestaurants)
                        console.log('data',data);
                        setFilteredRestaurants(data)
                    }}>Search</button>
                </div>
                <div className="restaurant-list">
                    {filteredRestaurants?.length > 0 ? filteredRestaurants?.map(restaurant => (
                        <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
                        )):filteredRestaurants?.length === 0 ? <h1>No Restaurant Found</h1>:Array(SHIMER_COUNT).fill(0).map(i => (<ShimmerCard />))}
                </div>
        </main>
    )
}

export default Body