import { useEffect, useState } from 'react'
import logo from '../../food-fire.jpg'

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
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>
                <li onClick={()=>{
                    setIsLoggedIn(prev => !prev)
                }}>{isLoggedIn ? 'Logout':'Login'}</li>
            </ul>
        </div>
    )
}

export default Header