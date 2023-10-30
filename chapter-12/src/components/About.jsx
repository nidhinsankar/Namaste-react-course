import food from '../assets/food.jpg'
import Profile from './ProfileClass'


const About = () => {

    return (
        <div className='mt-16 h-screen flex flex-col justify-center items-center'>
            {/* <Profile name="Nidhn" /> */}
             <p>Welcome to <span className='font-extrabold text-purple-600'>FOOD WORLD</span></p>
            <img src={food} alt="food" />
        </div>
    )
}

export default About