import React, {useState} from 'react';
import AddTodoForm from './AddTodoForm';

const TODOS = [
    {
     todoText: "Cook Food", done: false
    },
    {
     todoText: "Buy Food", done: false
    },
    {
     todoText: "Go to School", done: false
    },
    {
     todoText: "Call Mom", done: false
    },
]

export default function TodoList () {
    const [arr, setArr] = useState( TODOS );
    function handleToggle (index) {
        setArr( ( prevArr ) => 
            prevArr.map( ( todo, i ) => 
                i === index ? {...todo, done: !todo.done} : todo
            )
        )
    }

    function handleDelete (index) {
        setArr( ( prevArr ) => 
            prevArr.filter( ( todo, i ) => i !== index)
        )
    }
    return (
      <>
        <ul>
          <h1>LIST OF TODOS</h1>
            {arr.map( ( todo, index ) => {
                return (
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} key={index}>
                        <li
                        style={{textDecoration: todo.done ? "line-through" : "none"}}
                        onClick={()=> handleToggle(index)}
                        >
                            {todo.todoText}
                        </li>
                        <button style={{backgroundColor: 'black', color: 'white', width: '40px', height: '30px', textAlign: 'center'}} onClick={()=>handleDelete(index)}>X</button>
                        
                    </div>
                )
            })}
            </ul>
            <AddTodoForm setArr={setArr}/>
      </>
  )
}
