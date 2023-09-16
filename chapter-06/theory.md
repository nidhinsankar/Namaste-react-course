## 1. What is Microservice?
    The Microservices architecture is a type of application where the application is developed into as different collection of services.It enables the organization to develop large,complex application rapidly and maintain sustainabilty.In this architecture the application is loosely coupled and it is multi tiered so the components and functions are divided into small service and have small codebases
## 2. What is Monolith?
    The Monolith architure is traditional model for the design of a software program.It means "composing all in one place".Monolithic architure,the functions and components of a application are coupled tightly whereas in modular architure where the functions are loosely coupled.Monolithic applications are single tiered application where multiple components are combined into single large application which have large codebase
## 3. Difference between Microservice and Monolith?
    | Monolithic Architecture | Microservice Architecture |
    | ----------------------- | ------------------------- |
    | It is tightly coupled architecture   | it is loosely coupled architecture |
    | It has large codebase  | It has small codebase | 
    | Scaling is tough | Scaling is easy | 
    | Single codebase is deployed everytime | Multiple codebase are deployed | 
    | Low reliabillty | High reliabilty |
## 4. Why do we need useEffect hook ?
     the useEffect hook is used to perform side-effects in a component.It tells the react component to do something after render.the operations can be of api fetching, updating the DOM  and timers
## 5. What is Optional Chaining ?
     Optional chaining (?.) is a process for querying and calling properties, methods in a  object . If the object accessed or function called using this operator is undefined or null , the expression automatically returns null instead of throwing an error
## 6. What is shimmer UI?
    A shimmer UI is a version of the UI which doesn't contain the actual contain but still mimics the layout and shapes of the contentt that will appear. It uses a gradient animation that creates a shimmering effects giving the user a sense of motion and progress when the website process the UI
## 7. What is difference JS expression and JS statement ?
    JS statement are used to perform some action but do not return any value .All programs in javascript are made up of statements and they end with a semicolon
    JS expression are values or execute to values
## 8. What is conditional rendering ?explain with code example
    Conditional rendering is the process of displaying content based on certain condition . It allows us create dynamic user interface which can be like a toggle button, display modals
    ```
        function greeting() {
            const [isLoggedIn,setIsLoggedIn] = useState(false);

            return (
                <>
                    {isLoggedIn ? 'Hello sir':'please login using credentials}
                </>
            )

        }
    ```
## 9. What is CORS?
    CORS (Cross Origin Resource Sharing) happens when we try use to resource from other servers.For security reasons browser retricts cross origin http requests
## 10. What is async and await ?
    Async makes a function returns a promise. Await makes the function to wait for the promise. It enables us to write asynchronous code inside javascript.An async function declaration creates `AysncFunction` object .Each time a async function is called it will return a promise which will be resolved to the value returned by the async function or rejected with an exception.
## 11. What is the use of `const data = await data.json()`
    The data object returned in await fetch() line .We can extract the json Object returned using `await data.json()`.This method returns a promise because we have used await keyword