import React from "react"
import ReactDOM  from "react-dom/client"
import './index.css'
import userIcon from './user-icon.jpg'
import logo from './logo.png'

/**
 *  <div>
 *      <h1>Title</h1>
 *      <ul>
 *          <li>Home</li>
 *          <li>About us</li>
 *      </ul>
 *  </div>
 */

// create a Nested Header element Like Navbar with CreateElement 
// const Header = React.createElement(
//     "div",
//     {className:'container',key:'container'},
//     [
//         React.createElement(
//             "h1",
//             {id:"h1",key:"h1"},
//             "this is h1 tag"
//         ),
//         React.createElement(
//             "h2",
//             {id:"h2",key:"h2"},
//             "this is h2 tag"
//         ),
//         React.createElement(
//             "h3",
//             {id:"h3",key:"h3"},
//             "this is h3 tag"
//         ),
//     ]
// )

// create nested header with JSX
// const header = (
//     <div className="container" key="container">
//         <h1>this is h1 tag</h1>
//         <h2>this is h2 tag</h2>
//         <h3>this is h3 tag</h3>
//     </div>
// ) 

// create nested header wth functional component 
// const Header = () => {
//     return (
//         <div className="container" key="container">
//             <h1>this is h1 tag</h1>
//             <h2>this is h2 tag</h2>
//             <h3>this is h3 tag</h3>
//         </div>
//     )
// }

// pass attribute into tag in jsx
// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//       <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//       <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

// composition of components
// const AnotherComponent = () => {
//     return (
//         <h2>This is another component</h2>
//     )
// }

// const Header = () => {
//     return (
//         <div className="Title" key="title">
//              <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//             <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//             <AnotherComponent />
//             <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//      </div>
//     )
// }

// `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// const titleElement = <h1>this is a react element from variable</h1>
// const TitleElement = () => {
//     return (
//         <h2>this is react component</h2>
//     )
// }
// const Header = () => {
//     return (
//         <div className="Title" key="title">
//              <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//              {titleElement}
//              <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//              {<TitleElement />} using self-enclosing tag
//              <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//              {<TitleElement></TitleElement>} using opening and closing tag
//         </div>
//     )
// }

// Create a Header component from scratch using functional component

const Header = () =>{
    return (
        <header className="header-container">
            <div className="left">
                <img alt="logo" src={logo}  />
            </div>
            <div className="center">
                <input type="text" className="search" placeholder="Search..."  />
            </div>
            <div className="right">
                <img alt="user-icon" src={userIcon}  />
            </div>
        </header>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(Header())