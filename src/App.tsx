import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './NewComponent';
import {NewComponent2} from './NewComponent2';
import {Button} from './components/Button';

const ButtonFoo = (name: string, age: number, address: string) => {
    console.log('I am ' + name + ' ' + age + address);
};

function App() {
    return (
        <div className="App">
            <Button title={'MyYouTobeChanel1'} callBack={() => ButtonFoo('Vasya', 21, ' live in minsk')}/>
            <Button title={'MyYouTobeChanel2'} callBack={() => ButtonFoo('Ivan', 22, '')}/>
            <Button title={'stupid'} callBack={() => console.log('I am stupid button')}/>
            <button onClick={() => console.log('I am stupid button')}>stupidButton</button>
        </div>
    );
}

export default App;
