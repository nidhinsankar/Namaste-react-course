import { useContext, useEffect, useState } from 'react'
import { useSelector} from 'react-redux'
import logo from '../assets/food-fire.jpg'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'

const Title = () => {

    
    
    return (
        <img src={logo} width={"50px"} alt="logo" />
        )
}
    
const Header = () => {

    const {user} = useContext(UserContext)
    const isOnline = useOnline()
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const cartItems = useSelector(store => store.cart.items)
    

    return (
        <div className="header-container h-20 px-9 fixed top-0 w-full flex justify-between items-center bg-slate-400 shadow-lg">
            <Title />
            <ul className="nav-links flex items-center">
                <li className='mx-2'> <Link to='/' className='link'>Home</Link></li>
                <li className='mx-2'><Link className='link' to='/about'>About</Link></li>
                <li className='mx-2'><Link to='/contact-us' className='link'>Contact us</Link></li>
                <li className='mx-2'><Link to='/instamart' className='link'>Instamart</Link></li>
                <li className='mx-2'><Link to='/cart' className='link'>Cart - {cartItems?.length}</Link></li>
                <li className='mx-2'>{user.name}</li>
                <li className='mx-2'>{isOnline ? <span>&#x2705;</span>: <span>&#x2B55;</span>}</li>
                <li className='mx-2 ' onClick={()=>{
                    setIsLoggedIn(prev => !prev)
                }}><Link className='bg-purple-600 p-2 rounded-md text-white text-lg' to="/login">{isLoggedIn ? 'Logout':'Login'}</Link></li>
            </ul>
        </div>
    )
}

export default Header