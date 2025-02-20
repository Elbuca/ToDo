import styles from "./AddTodoB.module.css"
import React from "react";
function AddTodo({ actualizaTareas }) {
    const [newTask, setNewTask] = React.useState(''); // Estado para la nueva tarea

    const handleAddTask = async () => {
        if (!newTask.trim()) return;
      
        await actualizaTareas(newTask); // Solo le pasas el texto de la tarea
      
        setNewTask('');
      };
      

    return (
        <div className={styles.BotonContainer}>
            <input
                className={styles.TextAñadir}
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Escribe aquí tu tarea a añadir"
            />
            <input
                className={styles.Boton}
                type="button"
                value="Añadir Tarea"
                onClick={handleAddTask}
            />
        </div>
    );
}

export { AddTodo };