## 1.What is prop drilling ?
When the components heirarchy grows in the app it will become a problem to pass the state and props to the components that are not directly nested
Prop drillig is a process of passing a prop from parent to children into a long heireachy 
This will cause performance issue ,code complexity , maintainability of the code
## 2.What is lifting the state up?
The process of lifting the state to the parent component so that all children components can share state between them 
## 3.What is context provider and context consumer ?
context provider is used to storing and managing state across all components 
context consumer is used for using context state inside a component
## 4. If don't pass a value to the provider does it take the default value


## REACT DEVELOPER TOOLS
- COMPONENTS AND PROFILER TAB


### REFERENCES
[Avoid Prop drilling](https://blog.bitsrc.io/avoiding-prop-drilling-in-the-react-ecosystem-a-practical-guide-da785105f8d7#:~:text=In%20the%20React%20ecosystem%2C%20it's,known%20as%20%E2%80%9Cprop%20drilling%E2%80%9D.)
