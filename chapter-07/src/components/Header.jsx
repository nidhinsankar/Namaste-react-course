import { useEffect, useState } from 'react'
import logo from '../assets/food-fire.jpg'
import { Link } from 'react-router-dom'

const Title = () => {
    

    return (
        <img src={logo} width={"50px"} alt="logo" />
    )
}

const Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    return (
        <div className="header-container">
            <Title />
            <ul className="nav-links">
                <li> <Link to='/' className='link'>Home</Link></li>
                <li><Link className='link' to='/about'>About</Link></li>
                <li><Link to='/contact-us' className='link'>Contact us</Link></li>
                <li>Cart</li>
                <li onClick={()=>{
                    setIsLoggedIn(prev => !prev)
                }}><Link className='link' to="/login">{isLoggedIn ? 'Logout':'Login'}</Link></li>
            </ul>
        </div>
    )
}

export default Header