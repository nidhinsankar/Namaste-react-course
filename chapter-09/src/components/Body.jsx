import {  useEffect, useState } from "react"
import { SHIMER_COUNT } from "../../constants"
import RestaurantCard from "./RestaurantCard"
import { ShimmerCard } from "./Shimmer"
import { filterData } from "../utils/helper"
import {useRestaurants} from "../utils/useFetch"




const Body =() =>{
    const allRestaurants = useRestaurants()
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [searchText,setSearchText] = useState('')

    useEffect(()=>{
        setFilteredRestaurants(allRestaurants)
    },[allRestaurants])

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