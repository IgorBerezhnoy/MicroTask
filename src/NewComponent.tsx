type NewComponentPropsType = {
    students: Array<StudentsPropsType>
}
type StudentsPropsType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (<div>
        <ul>
            {props.students.map((objectFromStudentsArray) => {
              debugger
                return (
                    <li key={objectFromStudentsArray.id}>
                        <span>{objectFromStudentsArray.name}</span>
                        <span> age: {objectFromStudentsArray.age}</span>
                        </li>
                );
            })}
        </ul>
    </div>);
};