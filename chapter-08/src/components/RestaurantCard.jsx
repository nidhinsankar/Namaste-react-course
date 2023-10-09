import { Link } from "react-router-dom"
import { SWIGYY_IMG_CDN } from "../../constants"



const RestaurantCard = ({cloudinaryImageId,name,cuisines,locality,id}) => {

    return (
        <Link to={`/restaurant/${id}`}>

        <div className="restaurant-card">
            <img src={SWIGYY_IMG_CDN+cloudinaryImageId} alt="restaurant-photo" />
            <h2>{name}</h2>
            <p>{cuisines?.join(", ")}</p>
            <p>{locality}</p>
        </div>
        </Link>
    )
}

export default RestaurantCard