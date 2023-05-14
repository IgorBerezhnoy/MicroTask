import React, {useState} from 'react';
import './App.css';
import {CurrentMoneyType, NewComponent} from './NewComponent';

export type FilterType="all"|"ruble"|"dollar"
function App() {
    const [money, setMoney] = useState<CurrentMoneyType[]>([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ]);
    const [filter, setFilter] = useState<FilterType>('all');

    let currentMoney = money;

    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble');
    } else if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar');
    }

    const onclickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    };

    return (
<NewComponent currentMoney={currentMoney}
              onclickFilterHandler={onclickFilterHandler}/>
    );
}

export default App;

