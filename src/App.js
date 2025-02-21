import React from "react";
import { TodoSearch } from "./TodoSearch"
import { Titulo } from "./Titulo"
import { TodoCount } from "./TodoCount";
import { TodoList } from "./TodoList"
import { Todo } from "./Todo";
import { AddTodo } from "./AddTodo";
import './App.css';


/*const tareas =[
  {
    tarea: "COMER",
    completed: true,
    eliminar: false,
   },{
    tarea: "estudiar",
    completed: false,
    eliminar: false,
   },{
    tarea: "hacer ejercicio",
    completed: true,  
    eliminar: false,
   }
]*/




function App() { 
  const API_URL = 'https://todo-u9t2.onrender.com';
  const [todoState, setTodoState] = React.useState([]);
  React.useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${API_URL}/tasks/`);
        const data = await response.json();
        setTodoState(data);
      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    };
  
    fetchTasks();
  }, []);
 
  
  const actualizaTareas = async (newTaskTitle) => {
    try {
      const response = await fetch(`${API_URL}/tasks/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tarea: newTaskTitle,
          completed: false,
        }),
      });
  
      const newTask = await response.json();
  
      // Agregar al estado la nueva tarea devuelta por la API
      setTodoState((prevTodos) => [...prevTodos, newTask]);
    } catch (error) {
      console.error('Error al agregar tarea:', error);
    }
  };
  

  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
      });
  
      // Filtrar las tareas para actualizar el estado
      setTodoState((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
    }
  };

  const [searchValue, setSeachValue] = React.useState('')


  const toggleTodo = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };

    try {
      const response = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });

      const updatedTaskFromApi = await response.json();

      setTodoState((prevTodos) =>
        prevTodos.map((todo) => (todo.id === updatedTaskFromApi.id ? updatedTaskFromApi : todo))
      );
    } catch (error) {
      console.error('Error al actualizar tarea:', error);
    }
  };


  
  const searchedTodos = todoState.filter((todo)=>{
    return todo.tarea.toLowerCase().includes(searchValue.toLowerCase())
  })
  return (
    <>
    
      <Titulo/>
      <TodoCount lista={todoState}/>
      <TodoSearch searchValue={searchValue} setSeachValue={setSeachValue}/>
      <TodoList>
        {searchedTodos.map(todo=>(
          <Todo id={todo.id} key={todo.id} text={todo.tarea} todoState={todo.completed} setTodoState={() => toggleTodo(todo)} deleteTodo={deleteTodo} printTarea={(updatedTodos) => console.log(updatedTodos)}/>
        ))}

      </TodoList>
      <AddTodo actualizaTareas={actualizaTareas}/>
      
    </>
  );
}



export default App;
