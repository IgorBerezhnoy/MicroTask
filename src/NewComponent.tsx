import React from 'react';
import {FilterType} from './App';
type NewComponentType={
    currentMoney:MoneyType[]
    onClickFilterHandler:(nameButton: FilterType)=>void
}

type MoneyType={
    banknote:string
    nominal:number
    number:string
}

export const NewComponent=(props:NewComponentType)=>{
    return(<div>
        <>
            <ul>
                {props.currentMoney.map((el, index) => <li key={index}>
                    <span> {el.banknote} </span>
                    <span> {el.nominal} </span>
                    <span> {el.number} </span>
                </li>)}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('ruble')}>rubles</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>dollars</button>
            </div>
        </>

    </div>)
}