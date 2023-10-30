import { useDispatch, useSelector } from "react-redux"
import { SWIGYY_IMG_CDN } from "../../constants"
import { clearCart, removeItem } from "../utils/cartSlice"

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        console.log(id);
        dispatch(removeItem(id))
    }
    console.log(cartItems);
    return (
        <div className="mt-28">
            <div className="flex items-center">
               <h2 className="font-bold text-xl mx-6">CART - {cartItems?.length}</h2>
               <button className="btn-green w-[10%] bg-red-500 mt-3" onClick={()=>dispatch(clearCart())}>CLEAR CART</button>
            </div>
            <div className="w-[60%] p-5">
                {cartItems?.map(cart => (
                     <div className="w-full h-[200px] flex justify-between my-8 bg-[#fff] p-4 gap-3 shadow-md">
                     <div className="flex-[0_0_70%]">
                         <h2>{cart?.name}</h2>
                         <p>{cart?.description}</p>
                         <h2>{cart?.price > 0 ? new Intl.NumberFormat('en-IN',{
                             style:'currency',
                             currency:'INR'
                         }).format(cart?.price / 100) :'0'}</h2>
                         <button className="btn-green w-[15%] bg-red-500 mt-3" onClick={()=>handleDelete(cart?.id)}>Delete</button>
                     </div>
                     <div className="flex-[0_0_20%]">
                         <img src={SWIGYY_IMG_CDN+cart?.imageId} alt="food-image" className="w-full h-full block" />
                     </div>
                 </div>
                ))}
            </div>
        </div>
    )
}

export default Cart