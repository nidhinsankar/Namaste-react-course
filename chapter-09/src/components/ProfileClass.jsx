import React from "react"
import ProfileChild from "./ProfileChild";


class Profile extends React.Component  {

    constructor(){
        super() 
        // console.log(this.props);
        this.state = {
            count:0,
        }
    }

    
    //WE DO NOT MUTATE THE STATE DIRECTLY
    render() {
        console.log(this.props);
        return (
            <>
            <h3>Profile parent class</h3>
            <ProfileChild name='Nidhin' property='class in here' />
            </>
        )
    }
}

export default Profile


// COMPOUNTDIDMOUNT WILL BE CALLED AFTER RENDER BEST PLACE TO MAKE API CALLS
