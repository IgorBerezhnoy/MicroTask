import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]);

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });


    function removeTask(id: string, todoId: string) {
        setTasks({...tasks, [todoId]: tasks[todoId].filter(el => el.id !== id)});

        /*   let filteredTasks = tasks.filter(t => t.id != id);
           setTasks(filteredTasks);*/
    }

    function addTask(title: string, todoId: string) {
        let task = {id: v1(), title: title, isDone: false};

        setTasks({...tasks, [todoId]: [task, ...tasks[todoId]]});
        /* let newTasks = [task, ...tasks];
         setTasks(newTasks);*/
    }

    function changeStatus(taskId: string, isDone: boolean, todoId: string) {
        setTasks({...tasks, [todoId]: tasks[todoId].map(el => el.id === taskId ? {...el, isDone} : el)});

        /*let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks([...tasks]);*/
    }


    function changeFilter(value: FilterValuesType, todoId: string) {
        setTodolists(todolists.map(el => el.id == todoId ? {...el, filter: value} : el));

        // setFilter(value);
    }

    let allTodolits = todolists.map(el => {
        let tasksForTodolist = tasks[el.id];

        if (el.filter === 'active') {
            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
        }
        if (el.filter === 'completed') {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
        }
        return (<Todolist key={el.id}
                          title={el.title}
                          todoId={el.id}
                          tasks={tasksForTodolist}
                          removeTask={removeTask}
                          changeFilter={changeFilter}
                          addTask={addTask}
                          changeTaskStatus={changeStatus}
                          filter={el.filter}
        />);
    });

    return (
        <div className="App">
            {allTodolits}
        </div>
    );
}

export default App;
