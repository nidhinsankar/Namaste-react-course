## 1. Is JSX mandatory for react 
      JSX is not mandatory for react .Using React without JSX can be convenient when you don't want setup compilation in your build environment.
      Each JSX element is just syntactic sugar for calling React.createElement(element,props,content)
## 2. Is ES6 mandatory for react
      ES6 in not mandatory for react . ES6 is a standardization of javascript for making the code readable and accessible. We can use create-react-class module. It provides the api similar for ES6 classcreateReactClass()
## 3. {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent><TitleComponent />}
      {TitleComponent} : this value describes the TitleComponent as a javascript expression or a variable. the {} curly braces is used to embed a javascript expressin or a javascript variable
      {<TitleComponent />}: This value describes the TitleComponent as a javascript function or a component. the <TitleComponent /> represents the value as a react element without any children
      {<TitleComponent><TitleComponent />} : This value describes the TitleComponent as component or a function returning some JSX. The <TitleComponent></TitleComponent> with some children inside it.
## 4. How can i write comments in react
      JSX single line comment
      ```
            function MyComponent() {
            return (
                <div>
                {/* message prop requires a string */}
                <Hello message="Hello, World!" /> 
                </div>
            )
            }
      ``` 
      JSX multi-line comment
      ```
         function MyComponent() {
            return (
            <div>
                {/* 
                    Warning!
                    message prop requires a string 
                */}
                <Hello message="Hello, World!" /> 
            </div>
            )
            }
       ```
       we can write javascript comments outside of JSX
       ```
           function MyComponent() {
            return (
                /*
                Warning! 
                message prop requires a string
                */ 
                <div>
                <Hello message="Hello, World!" /> 
                </div>
            )
            }
       ```
       we can write javascript comments inside JSX but make sure to add a newline after the comments
       ```
            function MyComponent() {
            return (
                <div>
                <Hello
                    message="Hello, World!" // message prop requires a string
                /> 
                </div>
            )
            }
       ```
## 5. What is <React.Fragment></React.Fragment> and <></>
    <React.Fragment></React.Fragment> is a feature in react which allows us to return multiple elements from a React Component by creating a parent element without adding any extra nodes in the DOM. A React component can have only one parent element to group the children we fragment feature.
    Apart from Fragment,react also provides a shorthand notation <></> . It has the same functionality like react fragment but with less memory load 
## 6. What is virtual DOM?
    React uses virtual dom which is exact lightweight copy of the actual DOM .For every object which exists in the dom there is an object for that in virtual dom but it does not have the power to change the layout of the document
    Manipulating dom is slow ,but manipulating virtual dom is fast because nothing gets drawn on the screen.Whenever there is a change in the state of the application virtual dom gets updated first not the real dom.
    A virtual DOM is created and it is represented as a tree like structure. Each element in the application is a node in the dom.So,whenever there is a change in the state of react component a new virtual dom is created which is updated version of the previous virtual dom .Now react compares the previous virtual dom and the updated virtual dom using the `diff` algorithm which make a note in the list of changes in the two virtual doms and then the changes are sent to the actual dom in batch like format
## 7. What is Reconcilation in react ?
    The entire process of transforming the real changes to the dom is called as Reconcilation.Reconcilation is acheived by virtual dom and the diffing algorithm
## 8. What is React Fiber?
    Introduced in react 16,Fiber reconciler is the new reconcilation algorithm in react.
    Before fiber , reconcilation and rendering will be performed like synchronous structure which caused performance issue like laggy and choppy frame rates
    Fiber brings levels of priority for updates in react.It breaks the computation of componennt tree into nodes or units of work which the react can commit at any time. This process allows to start,pause or restart compuation of the component.Fiber splits the rendering and reconcilation into two phases Reconcilation phase and commit phase. 
## 9. Why do we need keys in react ? When do we need keys in react?
    A "key" is a special string in react which we need to use when creating list of items in application.
    Keys are used in react to identify which item in the list has been added, changed,updated or deleted
## 10. Can we index for keys in react?
    We can index for keys in react.But it can cause performance issue like displaying wrong data .Problem arises when we add new data or sort the list which confuses the react to display which value
## 11. What is props in react? ways to 
    Props are also called as 'properties' which can be used to pass data from one component to another component.We can pass arguments to react component using props or properties which is a object in structure
    ```
        const App = () => {
            return (
                <Card name="nidhin" age="20" /> // Card is a component Name and Age is props of it
            )
        }
    ```
## 12. What is config driven UI?
    In Config driven UI ,the layout, styles and other properties of UI elements are configured in the database or backend which modified without changing the codebase of the frontend