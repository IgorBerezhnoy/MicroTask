type ButtonPropsType={
    title:string
    callBack:()=>void
}
export const Button = (props:ButtonPropsType) => {
    function onClickHandler(){
        props.callBack()
    }
    return (<button onClick={onClickHandler}>{props.title}</button>);
};