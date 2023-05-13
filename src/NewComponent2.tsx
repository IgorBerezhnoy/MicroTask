type NewComponents2PropsType = {
    topCars: Array<topCarsPropsType>
}
type topCarsPropsType = {
    manufacturer: string,
    model: string
}


export function NewComponent2(props: NewComponents2PropsType) {
    return (<div>
        <table>
            {props.topCars.map((object) => {
                return (<tr>
                    <td>Mark: {object.manufacturer}</td>
                    <td>Model: {object.model}</td>
                </tr>);
            })}

        </table>
    </div>);
}