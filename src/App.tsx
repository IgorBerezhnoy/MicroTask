import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {Button} from './components/Button';


function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    );

    let [title, setTitle] = useState('');

  /*  const addNewMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);
    };*/

    const ButtonHandler = () => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);
        setTitle('');
    };

    return (
        <div className="App">
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={ButtonHandler}/>
            {/* <FullInput addNewMessage={addNewMessage}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                );
            })}
        </div>
    );
}

export default App;

