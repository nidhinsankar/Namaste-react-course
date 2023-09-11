


const RestaurantCard = ({cloudinaryImageId,name,cuisines,locality}) => {

    return (
        <div className="restaurant-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="restaurant-photo" />
            <h2>{name}</h2>
            <p>{cuisines?.join(",")}</p>
            <p>{locality}</p>
        </div>
    )
}

export default RestaurantCard