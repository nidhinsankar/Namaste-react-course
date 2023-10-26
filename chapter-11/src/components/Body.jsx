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
        <main className="w-full  lg:w-[80%] lg:mx-auto">
                <div className="my-28 w-96 mx-auto">
                    <input type="text" placeholder="Search..." className="focus:outline border outline-slate-700 p-2 m-2 rounded-sm w-[70%]" onChange={(e)=>setSearchText(e.target.value)} />
                    <button
                        className="bg-purple-600 p-2 focus:outline outline-purple-800 border border-purple-600 rounded-sm w-[25%] " 
                        onClick={()=>{
                        const data = filterData(searchText,allRestaurants)
                        console.log('data',data);
                        setFilteredRestaurants(data)
                    }}>Search</button>
                </div>
                <div className="grid auto-rows-fr gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filteredRestaurants?.length > 0 ? filteredRestaurants?.map(restaurant => (
                        <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
                        )):filteredRestaurants?.length === 0 ? <h1>No Restaurant Found</h1>:Array(SHIMER_COUNT).fill(0).map(i => (<ShimmerCard />))}
                </div>
        </main>
    )
}

export default Body