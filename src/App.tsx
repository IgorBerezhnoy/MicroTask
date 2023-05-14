import React, {useState} from 'react';
import './App.css';

function App() {
    let [a, setA] = useState(1);
    const OnclickHandler = () => {
        setA(a += 1);
        console.log(a);
    };
    const OnclickDoZero=()=>{
        setA(a= 0)
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={OnclickHandler}>+1</button>
            <button onClick={OnclickDoZero}>0</button>
        </div>
    );
}

export default App;
