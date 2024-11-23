import React, {useRef} from 'react'

export default function AddTodoForm ( {setArr} ) {
    const todoTextRef = useRef();
    const doneTextRef = useRef();

    

    function handleSubmit (e) {
        e.preventDefault();
        const newTodo = {
            todoText: todoTextRef.current.value,
            done: doneTextRef.current.checked
        }
        if ( newTodo.todoText === "" ) return;
        setArr( ( prevState ) => [...prevState, newTodo] );
        todoTextRef.current.value = "";
        doneTextRef.current.checked = false;
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="todoText">TodoText</label>
        <input type="text" placeholder='Todotext' ref={todoTextRef}/>
        <label htmlFor="done">Done</label>
        <input type="checkbox" ref={doneTextRef}/>
        <button style={{color: 'white', backgroundColor: 'black'}}>Submit</button>
    </form>
  )
}
