import React from "react"
import ReactDOM from "react-dom/client"

const heading1 =  React.createElement("h1",{id:"title"},"heading 1")
const heading2 = React.createElement("h2",{id:"title-2"},"heading 2")

const container  = React.createElement("div",{id:"container",style:{color:"red",backgroundColor:"blue"}},[heading1,heading2])

const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"))

reactRoot.render(container)