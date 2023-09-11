import { useState } from "react"
import { restaurantLists } from "../../constants"
import RestaurantCard from "./RestaurantCard"


const filterData = (searchText,restaurants) => {
    return restaurantLists?.filter(restaurant => (
        restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    ))
}

const Body =() =>{
    const [restaurants,setRestaurants] = useState(restaurantLists)
    const [searchText,setSearchText] = useState('')

    return (
        <main>
                <div className="search-bar-container">
                    <input type="text" placeholder="Search..." className="search-bar" onChange={(e)=>setSearchText(e.target.value)} />
                    <button onClick={()=>{
                        const data = filterData(searchText,restaurants)
                        setRestaurants(data)
                    }}>Search</button>
                </div>
                <div className="restaurant-list">
                    {restaurants?.map(restaurant => (
                        <RestaurantCard {...restaurant?.info} />
                        ))}
                </div>
        </main>
    )
}

export default Body