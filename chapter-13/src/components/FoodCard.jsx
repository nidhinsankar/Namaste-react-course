import { useDispatch } from "react-redux"
import { SWIGYY_IMG_CDN } from "../../constants"
import { addItem } from "../utils/cartSlice"


const FoodCard = ({name, description, price, imageId,id}) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="w-full h-[200px] flex justify-between my-8 bg-[#fff] p-4 gap-3 shadow-md">
            <div className="flex-[0_0_70%]">
                <h2>{name}</h2>
                <p>{description}</p>
                <h2>{price > 0 ? new Intl.NumberFormat('en-IN',{
                    style:'currency',
                    currency:'INR'
                }).format(price / 100) :'0'}</h2>
            </div>
            <div className="flex-[0_0_20%]">
                <img src={SWIGYY_IMG_CDN+imageId} alt="food-image" className="w-full h-[60%] block" />
                <button className="btn-green mt-3" onClick={()=>handleAddItem({name, description, price, imageId,id})}>ADD</button>
            </div>
        </div>
    )
}

export default FoodCard