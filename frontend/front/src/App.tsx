import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

function App() {
    // const dispatch = useDispatch()

    const [users, setUsers] = useState<any>([])
    const [tasks, setTasks] = useState<any>([])
    console.log(users)

    const getUsers = () =>{
        axios.get('http://localhost:4000/users')
            .then((res) => {
                console.log(res.data)
                //@ts-ignore
                setUsers(res.data)
            })
    }

    useEffect(() => {
        console.log('server')
        getUsers()
    }, [])

    useEffect(() => {
        console.log('server2')
        axios.get('http://localhost:4000/posts')
            .then((res) => {
                console.log(res.data)
                setTasks(res.data)
            })
    }, [])

    const [newName, setNewName] = useState('')

    const addNewUser = () =>{
        axios.post('http://localhost:4000/users', {name: newName})
            .then((res) => {
                console.log(res.data)
                getUsers()
            })
    }


    const user = users.map((u: any) => {
        return (
            <div key={u.id}>
                <span>{u.name}.</span>

                {u.title}
                <div>{u.body}</div>
                -
            </div>
        )

    })

    const task = tasks.map((u: any) => {
        return (
            <div key={u.id}><span>{u.userId}.
            </span> {u.title}
                <input checked={u.completed} type="checkbox"/>
            </div>
        )

    })



    return (
        <div className="App">
            <h1>Start Server</h1>
            <input type="text" value={newName} onChange={(e)=>{setNewName(e.currentTarget.value)}}/>
            <button onClick={addNewUser}>Add new user</button>

            {user}
            {task}

        </div>
    );
}

export default App;
