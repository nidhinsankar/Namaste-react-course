## 1. How do you create nested routes using react-router-dom
Prevoiusly in react-router-dom V5 , we were using the switch function to switch between components.Nested routes enables us to have multiple components in the same page with route parity
```
const appRouter = createBrowserRouter([
    {
        element:<AppLayout/>,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/about',
                element:<About />,
                children:[
                    {
                        path:'profile-page',
                        element:<Profile />
                    }
                ]   
            },
            {
                path:'/contact-us',
                element:<ContactUs />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/restaurant/:restaurantId',
                element:<RestaurantMenu />
            }
        ]
    }
])

```
In this example , the AppLayout is the parent component and child components are configured in the children propery .It can be displayed in the AppLayout component using the <Outlet /> component provided by the `react-router-dom` .The children components can also have nested routes in it and can be configured using children property in it .
## 2. Read about createHashRouter, createMemoryRouter from react-router-dom docs
#createHashRouter :
hash router uses the hashes in the url to be in sync with the ui.HashRouter can be used with the web browser when the URL will not be sent to server for some security or ther reasons
#createMemoryRouter :
Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
## 3. what is the order life cycle method calls in class based components
This is the order of life cycle method calls in class based components
# MOUNTING 
Constructor() method is called when everytime we make an component
getDerivedStateFromProps is static which only return an object it run just before render() method
render() runs after getDerivedStateFromProps and also everytime a state or any other prop is changed
compountDidMount() runs after render method

# UPDATING
getDerivedStateFromProps() is first method called when a compount is updated. this is the place to set the state based on initial props
shouldComponetUpdate() it returns a boolean default value is true. If it is false it won't update the component
render() to render the UI with new state
getSnapshotBeforeUpdate() has access to props and state of before the update meaning we can check previous props and state in it
componentdidUpdate() method is called when the component is updated into the dom

# UNMOUNTING
componentWillUnmount() is called when the compount is unmouting from the dom


## 4. Why do we use componentDidMount ?
componentDidMount() lifecycle method is used to perform any initialization task which require any browser api  like setting up the timers ,event listeners ,performing api calls or data fetching operations. This lifecycle method is called when the component is mounted or inserted into the dom for the first time
## 5. Why do we use componentWillUnmount ?Show this example ?
componentWillUnMount lifecycle method is called when the component is unmounted from the dom this usually happens when we go another route or component .One of biggest con of a single page application is that when we use event listener , timer api , or any other browser api in our component .It will run when the component is mounted into DOM but when we go to new page the listener will not stop because only the component is changed not the page it cause lot of performance issues when we revisit again ,So componentWillUnMount acts as a cleanup function to use clearInterval method to stop the interval which was set earlier
## 6. Why do we use super(props) in constructor ?
super(props) is the insruction which helps us to access this.props in a contructor function. super() function is the one which calls the contructor of the parent class 
```
class Profile extends React.Component  {

    constructor(){
        // super() 
        // console.log(this.props);
        this.state = {
            count:0,
        }
    }

    
    //WE DO NOT MUTATE THE STATE DIRECTLY
    render() {
        console.log(this.props);
        return (
            <h3>Profile class --- {this.props.name}</h3>
        )
    }
}
```
It gives this error
```
×
←→1 of 2 errors on the page
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
new Profile
src/components/ProfileClass.jsx:9:8
   6 | constructor(){
   7 |     // super() 
   8 |     // console.log(this.props);
>  9 |     this.state = {
     |    ^  10 |         count:0,
  11 |     }
  12 | }
View compiled
```
## 7. Why can't we have callback function of useEffect async ?
This is because useEffect function excepts its effect to return either a cleanup function or nothing at all.This is due to callback's function asynchronus nature of useEffect function and lack of blocking.So we need to use asynchronous function inside the callback of the useEffect which we can use perform async operations


<!-- wE SHOULD NOT MUTATE THE STATE DIRECTLY -->