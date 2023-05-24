import React, {MouseEvent} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './NewComponent';
import {Button} from './components/Button';

function App() {
    const Button1Foo = (name: string, age: number, address: string) => {
        console.log('I am ' + name + ' ' + age + ' ' + address);
    };
    const Button2Foo = (name: string, age: number) => {
        console.log('I am ' + name + ' ' + age);
    };
    const stupidButton=(some:string)=>{
        console.log(some);
    }
    /*
    const Button2Foo = () => {
        console.log("I am ");
    }
    */

    return (
        <div className="App">
            <Button title={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Vasya', 21, 'live in minsk')}/>
            <Button title={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Ivan', 2)}/>
            <Button title={'I am stupid button'} callBack={() => stupidButton('I am a stupid button')}/>

        </div>
    );
}

export default App;
