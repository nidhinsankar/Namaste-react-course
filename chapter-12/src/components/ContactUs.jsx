import food from '../assets/food.jpg'
import { useFormik } from 'formik'


const validate = values => {
    const errors = {}
    if(!values?.name) {
        errors.name = "Required"
    }else if(values?.name.length > 15){
        errors.name = "Must be less than 15 characters"
    }

    if(!values?.email) {
        errors.email = "Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))  {
        errors.email = "Invaid email address"
    }

    if(!values?.message) {
        errors.message = "Required"
    }

    return errors
}

const ContactUs = () =>{

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:''
        },validate,
        onSubmit:values => {
            console.log(values);
        }
    })

    console.log(formik);

    return (
        <div className="min-h-[calc(100vh - 100pc)] w-full flex gap-8 mt-24">
            <div className="w-full">
                <img src={food} alt="food image" />
            </div>
            <div className="flex flex-col w-[40%]">
                <form className="contact-us-form">
                     <input type="text" id="name" name='name' className='input-box' placeholder='Name' value={formik?.values?.name} onChange={formik?.handleChange} />
                     {formik?.errors?.name ? <div>{formik?.errors?.name}</div> : null}
                     <input type="email" id="email" name="email" placeholder='email' className='input-box' value={formik?.values?.email} onChange={formik?.handleChange} />
                     {formik?.errors?.email ? <div>{formik?.errors?.email}</div> : null}
                     <textarea name="message" id="message" placeholder='Message' cols="10" className='input-box' rows="5" value={formik?.values?.message} onChange={formik?.handleChange}></textarea>
                     {formik?.errors?.message ? <div>{formik?.errors?.message}</div> : null}
                </form>
            </div>
        </div>
    )
}

export default ContactUs