## 1. What are different ways to add images into our app? Explain with code examples
USING IMPORT KEYWORD
```
import ProfileImage from './profile.jpg'

const MyComponent = () => {

    return (
        <img src={ProfileImage} alt="profile-image" />
    )
}
```
USING REQUIRE KEYWORD
```
import React from 'react'

const MyComponent = () => {

    return (
        <img src={require('./profile.jpg')} alt="profile-image" />
    )
}
```
IMPORTING SVG AS A REACT COMPONENT
```
import ProfileSVG from './profile.svg'

const MyComponent = () => {

    return (
        <div>
            <ProfileSVG />
        </div>
    )
}
```
LOAD IMAGES FROM THE NETWORK OR CDN
```
    import React from 'react'

    const MyComponent = () => {

        return (
            <img src={'https://community-cdn-digitalocean-com.global.ssl.fastly.net/vUuUtKqDrY9gAbaD2czK9KrN'} alt="profile-image" />
        )
    }
```
## 2. What would happen if we do console.log(useState()) ? 
When we `console.log(useState())` it will log the array with two values which the first one is undefined because we didn't give any initial value for it and second value in the array is the function which we use to change the value
## 3. How will useEffect behave if we don't add a dependency array ?

If we didn't add dependency array like on this example it will run on initial render and also everytime when our component re-renders 
```
    useEffect(()=>{
        console.log('inside useEffect')
    })
```
If we add dependency array but not any values in the array like on this example it will run on initial render and also everytime when our component re-renders
```
    useEffect(()=>{
        console.log('inside useEffect')
    },[])
```
## 4. What is SPA ?
A SINGLE PAGE APPLICATION(SPA) is a web app implementation which serves only one document from the server . The content inside it are updating using javascript apis this allows us to create dynamic web apps without the need to get all html files from the server instead created on the web browser which increases performance
examples : Gmail,Facebook,Instagram,Twitter  
## 5. Difference between server-side routing and client-side routing ? 
| SERVER SIDE ROUTE | CLIENT SIDE ROUTE |
| :---------------- | :---------------- |
| Most common way of handling routes in a webapp | Most commonly used in SPAs|
| When a url is changed it makes a request to the server to fetch the html doc and display it | when the url is chnaged javascript will do routing internally|
| request to server is made everytime when we want to load a new page | request is not made when we want to load new page|
| rendering is happening in serverside | rendering is happening at client side |