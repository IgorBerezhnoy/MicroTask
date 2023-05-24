import React from 'react';
type ButtonType={
    title:string
    callBack:()=>void
}

export const Button=(props:ButtonType)=>{
    const OnClickHandler=()=>{
        props.callBack()
    }
    return(
        <button onClick={OnClickHandler}>{props.title}</button>
    )
}