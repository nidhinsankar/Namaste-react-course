import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"


const validate = values => {
    const errors = {}
    if(!values?.email) {
        errors.email = "Required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid Email Address"
    }

    if(!values?.password) {
        errors.password = "Required"
    }

    return errors
}

const Login = () => {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate,
        onSubmit:values=>{
            alert(values?.email,'logged in')
            navigate('/')
        }
    })

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>LOGIN</h2>
                <label htmlFor="email">Email
                    <input type="email" name="email" id="email" placeholder="Email" className="login-email" value={formik?.values?.email} onChange={formik.handleChange} />
                </label>
                <label htmlFor="password">Password
                    <input type="password" name="password" id="password" placeholder="Password" className="login-password" value={formik?.values?.password} onChange={formik.handleChange} />
                </label>
                <button onClick={formik?.handleSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default Login