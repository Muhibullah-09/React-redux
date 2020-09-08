import React, { useState } from 'react'
let baseURL = "fakeapi"
function Todos() {
    // useEffect(() => {
    //     // fetch(`${baseURL}/getTodos`)
    //     //     .then(res => res.json())
    //     //     .then(data => console.log('data', data))
    //     fetch(`${baseURL}/getUsers`)
    //         .then(res => res.json())
    //         .then(data => console.log('data', data))
    // })
    let [data, setData] = useState([])
    const addTodoHandler = () => {
        fetch(`/${baseURL}/addTodos`, {
            method: "POST",
            body: { id: 1232, text: 'text' }
        }).then(res => {
            console.log("success", res)
        }).catch(error => {
            console.log("error addtodo", error)
        })
    }

    const getDataHandler = () => {
        fetch(`${baseURL}/getTodos`)
            .then(res => res.json())
            .then(data => {
                setData(data.todos)
                console.log('data', data)
            })
    }
    return (
        <div>
            Hello from todos
            <button onClick={addTodoHandler}>Add</button>
            <button onClick={getDataHandler}>get Todos</button>
            {
                JSON.stringify(data)
            }
        </div>
    )
}

export default Todos
