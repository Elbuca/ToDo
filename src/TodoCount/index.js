import React from "react";
import style from "./Count.module.css";

function TodoCount(props) {


    let completed =0
    let total=0
    props.lista.forEach(todo => {
        total+=1
        if (todo.completed!==false) {
            completed+=1
        }
    });

    return(
        <h2 className={style.Contador} >Has completado {completed} de {total} tareas</h2>
    )
    
}
export { TodoCount };

