type TopCarsType = {
    topCars: CarsType[]
}

type CarsType = {
    manufacturer:string,
    model:string
}




export const NewComponent = (props: TopCarsType) => {
    return (
        <table>
            {props.topCars.map((el, index)=>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{el.manufacturer}</td>
                <td>{el.model}</td>
            </tr>)}
        </table>
    );

};