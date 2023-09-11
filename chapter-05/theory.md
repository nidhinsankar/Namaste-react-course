## 1. What is the difference between Named export,Default export and * as export?
    ES6 provides us to export and import module which we can use in other files.ES6 provides two ways to import and export called as default and named. In Named export,one can have multiple named exports per file.Then import the particular module by specifying them in the paranthesis.The name of the imported module must same as the exported module
    ```
        // ex. importing single component 
        import { Component1 } from './MainComponent'
        // ex. importing multiple component from a single file
        import { Component1 , Component2 } from './MainComponents'
        //ex. exporting mutiple named components
        export const Component1 = () => {}
        export const Component2 = () => {}
    ``` 
    We can import all the named components into a single object and use it
    ```
       import * as Components from './MainComponent'

       <Components.Component1 />
       <Components.Component2 />
    ```
    One can export only one default component per file . We need to specify a name and import it
    ```
        //ex. It can be of any name to import it
        import MyComponent1 from "./MainComponent"

        //ex. exporting from the file
        const MyComponent1 = () => {}

        export default MyComponent1
    ``` 
## 2. What is the importance of config.js file?
    `config.js` file is used to store default or constant values that we need to use in multiple places in our app.So that if we need to modify the default value in one place and it will reflect in all the places it had been used.
    ex: all URL links , base url link,default name for context and redux part
## 3. What are react hooks ?
    React hooks was introduced in the version 16.8 .Earlier developers have to class-based components to use react feautures like state, componentWillMount, componentWillDisMount etc. To use these features inside a functional components hooks concept was introduced. Hooks are nothing javascript function which manage component state and side-effects in a component

    list of built-in hooks : useState,useEffect,useContext,useReducer,useLayoutEffect,useMemo,useRef,useDebugValue,useCallback 
## 4. Why do we need to use useState Hook?
    The useState hook is used to manage state in a component.State generally refers data we use in a application.The useState hook returns array of the value and set function to change its value
    ```
        function Component1() {
            const [value,setValue] = useState();

            return (
                <h1>{value}</h1>
            )
        }
    ```