import {useEffect, useLayoutEffect, useRef, useState} from "react";

import {TodoForm, TodoList} from "./components";


const LOCAL_STORAGE_KEY = 'react-todo-list-todos';


function App() {

  const [todos, setTodos] = useState([]);



  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const firstUpdate = useRef(false);

  useEffect(() => {

      if (firstUpdate.current) {
          firstUpdate.current = false
          return;
      } else if (!firstUpdate.current) {
          console.log(firstUpdate.current)
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
          console.log('not target')
      }
  }, [todos]);


  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageItems){
        console.log(storageItems.length);
      setTodos(storageItems);
    }

  }, [])


  function toggleComplete(id) {
    setTodos(
        todos.map(todo =>{
          if (todo.id === id){
            return{
              ...todo,completed: !todo.completed
            };
          }
          return todo;
        })
    );
  }




  return (
    <div className="App">
        <header>
          <p>React Todo</p>
          <TodoForm addTodo={addTodo}/>
          <TodoList todos={todos} toggleComplete={toggleComplete}/>
        </header>
    </div>
  );
}

export default App;
