import logo from '../../food-fire.jpg'

const Title = () => {

    return (
        <img src={logo} width={"50px"} alt="logo" />
    )
}

const Header = () => {

    return (
        <div className="header-container">
            <Title />
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Header