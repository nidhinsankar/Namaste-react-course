## 1. Explain useContext vs redux ? 
**useContext** 
It is an hook provided by the react to maintain the state in central store and pass down context into the children .It allows us to subscribe to context from our component.It is best when used in small scale application.making debug littlw bit difficult

**redux**
is a javascript library which can be used to maintain and updating state of a react app in a single store.It allows us to subscribe to the central store.Redux provides us with certain patterns and rules to write code which is predicatble and testable
## 2. Advantage of using redux toolkit over redux
- **redux Toolkit** is new and recommended way for writing redux logic in our app to maintain global state of our app.
- **redux-toolkit** has less boilerplate code compared to older redux
- **redux-toolkit** is little bit easy to setup in our app
- **redux** is the older way of writing redux logic in our react app
- **redux** is not recommended for small projects and tough to setup or configure the store
-  **redux** has lot of boilerplate code even for small operation
## 3. Explain Dispatcher ?
Dispatcher is used to dispatch an action which calls the reducer function which in turn will modify the state of slice in the central store.
We use **useDispatch** hook from the `react-redux` library for dispatching an event
## 4. Explain Reducer ?
Reducer is a javascript function which is used to modify the state in the store. We can have multiple reducer in the store each one reducer for one slice.
`configureStore` function contains a reducer parameter which we need to provide when we are creating the store in our app.
Reducer function takes in a state,action in which state is the previous state of the slice and action has a payload property which is optional which is passed by the when dispatching a action and then reducer modifies the state and updates a new state . We have to update the state immutable way but using  redux-toolkit we can use mutable ways to update the state because it uses a immer library which takes care of the immutable data
## 5. Explain Slice ?
`createSlice()` is provied by `redux-toolkit` is a javascript function which is used to separate the features into smaller slices. This function takes in a name, initialState, reducers object which contains all the reducers need for that particular slice.
A slice function take in object of reducer function, a slice name , an initial state and automatically generates action creators action types based on the reducer logic and state.  
## 6. Explain selector ?
`useSelector` is provided by `react-redux` is used to subscribe to particular piece of state from the store which can be used inside a component.This makes the particular component look into the particular piece of state from the global and whenever any change happens to the piece of data and it re-render the ui with the new state from the store
`useSelector` hook accepts a single function known as selector .A selector is a javascript function which takes whole store as argument which we can use to select particular piece of data and return the result
## 7. Explain createSlice and the configuration it takes 
`createSlice()` is provied by `redux-toolkit` is a javascript function which is used to separate the features into smaller slices. This function takes in a name, initialState, reducers object which contains all the reducers need for that particular slice.
A slice function take in object of reducer function, a slice name , an initial state and automatically generates action creators action types based on the reducer logic and state.  
```
import { createSlice } from '@reduxjs/toolkit'


const usersSlice = createSlice({
    name:'users',
    initialState:{
        users:[]
    }
    reducers:{
        addUser:(state,action){
            state.users.push(action.payload)
        }
    }
})

export const { addUser } = usersSlice.actions
export default usersSlice.reducer
```