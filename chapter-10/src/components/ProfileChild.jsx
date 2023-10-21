import React from "react"
import { Link } from "react-router-dom";


class ProfileChild extends React.Component {

    constructor(props){
        super(props)

        console.log(this.props);

        this.state = {
            username:'abishek kumar',
            username3:'toby kumar',
            username4:this.props.name
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log('timer is here');
        }, 100);
    }


    componentWillUnmount(){
        clearInterval(this.timer)
    }
    


    render() {
        console.log(this.state);
        return (
            <>
            <h2>Profile child -- {this.props.name} --- {this.props.property}</h2>
            <h2>{this.state.username}</h2>
            <h2>{this.state.username3}</h2>
            <h2>{this.state.username4}</h2>
            <Link to='/'>Go home</Link>
            <button onClick={()=>{
                this.setState({
                    username:'papali kumar',
                })
            }}>change me</button>
            </>
        )
    }
}

export default ProfileChild


// MOUNTING ----- 
// Constructor() method is called when everytime we make an component
// getDerivedStateFromProps is static which only return an object it run just before render() method
// render() runs after getDerivedStateFromProps and also everytime a state or any other prop is changed
// compountDidMount() runs after render method

// UPDATING
// getDerivedStateFromProps() is first method called when a compount is updated. this is the place to set the state based on initial props
// shouldComponetUpdate() it returns a boolean default value is true. If it is false it won't update the component
// render() to render the UI with new state
// getSnapshotBeforeUpdate() has access to props and state of before the update meaning we can check previous props and state in it
// componentdidUpdate() method is called when the component is updated into the dom

// UNMOUNTING
// componentWillUnmount() is called when the compount is unmouting from the dom