import style from "./Todolist.module.css";

function TodoList(props) {
    return(        
        <ul className={style.lista}>
            {props.children}
        </ul>
    )
    
}
export {TodoList};