import React from 'react';
import {FilterType} from './App';

type PropsType = {
    currentMoney: Array<CurrentMoneyType>
    onclickFilterHandler:(nameButton: FilterType)=>void
}
export type CurrentMoneyType = {
    banknote: 'dollar' | 'ruble'
    nominal: number
    number: string
}
export const NewComponent = (props: PropsType) => {
    return (<div>
        <>
            <ul>
                {props.currentMoney.map((objFromArr, index) => {
                        return (
                            <li key={index}>
                                <span>{objFromArr.banknote}</span>
                                <span>{objFromArr.nominal}</span>
                                <span>{objFromArr.number}</span>
                            </li>
                        );
                    }
                )}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onclickFilterHandler('all')}>all</button>
                <button onClick={() => props.onclickFilterHandler('ruble')}>Rubles</button>
                <button onClick={() => props.onclickFilterHandler('dollar')}>Dollars</button>
            </div>
        </>
    </div>);
};