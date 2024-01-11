### useMemo

- used when performing heavy operation
- when we are running performance intensive heavy operation it will affect the ui and performance of the app so to optimize it we use useMemo hook provided by the react
- useMemo is used to cache result of the calculation between re-renders

**performance heavy operation without useMemo**

```
const [number,setNumber] = useState('');
const [darkMode,setDarkMode] = useState(false)

const getPrime = ()=>{
    console.log("Calculate the prime number of",number)
    return findPrime(number)
}

return (
    <div>
        <button>Toggle</button>
        <div>
            <input
                type="number"
                onChange={()=>setNumber(e.target.value)}
             />

             <h2>nth prime --- {getPrime()}</h2>
        </div>
    </div>
)
```

**performance heavy operation with useMemo**

```
const [number,setNumber] = useState('');
const [darkMode,setDarkMode] = useState(false)

consrt getPrime =useMemo(()=>findPrime(number),[number])

<!-- const getPrime = ()=>{
    console.log("Calculate the prime number of",number)
    return findPrime(number)
} -->

return (
    <div>
        <button>Toggle</button>
        <div>
            <input
                type="number"
                onChange={()=>setNumber(e.target.value)}
             />

             <h2>nth prime --- {getPrime()}</h2>
        </div>
    </div>
)
```

### useRef

- useRef allows you to reference a value that's not needed for rendering
- useRef can be used to persist a value between rendering
- Normal variables does not persist data between re-render
- when value in useRef is changed it does fire up any render and persisted data will show up in UI when any re-render happens inside the component

```
const [x,setX] = useState(0);

let y = 10;

return (
    <div>

        <h2>increase x button -- <span>{x}</span></h2>
         <h2>increase y button -- <span>{y}</span></h2>
    </div>
)
```

- when we try to increase

### useCallback

- used to cache the function definition between re-renders
