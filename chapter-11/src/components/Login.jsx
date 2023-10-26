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
        <div className="min-h-[calc(100vh-100px)] flex justify-center items-center mt-24">
            <div className="bg-white flex flex-col w-[320px] h-[400px] p-8 shadow-lg rounded-md">
                <h2 className="mb-8">LOGIN</h2>
                <label htmlFor="email">Email
                    <input type="email" name="email" id="email" placeholder="Email" className="input-box" value={formik?.values?.email} onChange={formik.handleChange} />
                </label>
                <label htmlFor="password">Password
                    <input type="password" name="password" id="password" placeholder="Password" className="input-box" value={formik?.values?.password} onChange={formik.handleChange} />
                </label>
                <button className="btn-login bg-[#ee5684] border-[#ee5684] hover:shadow-[#c1caca]" onClick={formik?.handleSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default Login