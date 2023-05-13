type BodyPropsType={
    titleForBody:string
}

export function Body(props:BodyPropsType) {
    return (
        <div>
            {props.titleForBody}
        </div>
    );
}