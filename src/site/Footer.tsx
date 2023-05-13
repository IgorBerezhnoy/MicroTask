type FooterPropsType={
    titleForFooter:string
}

export function Footer(props:FooterPropsType) {
    return (
     <div>
         {props.titleForFooter}
     </div>
    );
}