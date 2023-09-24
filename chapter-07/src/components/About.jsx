import food from '../assets/food.jpg'


const About = () => {

    return (
        <div className='about-page'>
            <p>Welcome to <span>FOOD WORLD</span></p>
            <img src={food} alt="food" />
        </div>
    )
}

export default About