import React, {useState} from 'react';
import './App.css';

function App() {
    let [a, setA] = useState(1);

    const OnClickHandler = () => {
        setA(a += 1);
        console.log(a);
    };

    const OnClickHandlerDoZero = () => {
        setA(a= 0);

        console.log(a);
    };
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={OnClickHandler}>number+1</button>
            <button onClick={OnClickHandlerDoZero}>0</button>
        </div>
    );
}

export default App;
