import { Link, useRouteError } from 'react-router-dom'
import ErrorImage from '../assets/error-404.jpg'

const Error = () => {

    const {error} = useRouteError()


    return (
        <div className='error-page'>
            <img src={ErrorImage} alt="error-404" />
            <p className='error-message'>{error?.message}</p>
            <Link to="/" className='nav-button'>BACK TO HOME</Link>
        </div>
    )
}

export default Error