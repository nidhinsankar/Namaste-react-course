import { Link } from "react-router-dom"
import { SWIGYY_IMG_CDN } from "../../constants"



const RestaurantCard = ({cloudinaryImageId,name,cuisines,locality,id}) => {

    return (
        <Link to={`/restaurant/${id}`}>

        <div className="w-[350px] rounded overflow-hidden shadow-lg">
            <img src={SWIGYY_IMG_CDN+cloudinaryImageId} className="w-full h-60 object-cover object-right" alt="restaurant-photo" />
            <div className="p-2">
                <h2 className="font-bold text-xl mb-2">{name}</h2>
                <p className="text-gray-700 text-base mb-2">{locality}</p>
                <div className="">{cuisines?.map(cuisine => (
                    <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{cuisine}</span>
                    ))}
                </div>
            </div>
        </div>
        </Link>
    )
}

export default RestaurantCard