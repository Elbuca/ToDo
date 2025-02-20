import React from "react";
import { Eliminar } from "../Eliminar/";
import style from "./Todo.module.css";

function Todo(props) {
  
  
  return (
    <li className={`${style.Lista} ${props.todoState && style['Lista--completed']}`}>
      
        <span className={`${style.Icon} ${style['Icon-check']} ${props.todoState && style['Icon-check--active']}`} onClick= {()=> {
          props.setTodoState()
        }} >
          <svg
            width="16"
            height="16"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.93012 28.535L3.92983 28.5367C3.68625 29.9906 4.25659 31.4622 5.42776 32.3673L19.3162 44.3873L19.3237 44.3938L19.3313 44.4002C20.2095 45.1451 21.3641 45.4711 22.4937 45.3075L22.4937 45.3075L22.505 45.3058C23.6374 45.1352 24.6431 44.4906 25.2686 43.5307C25.2691 43.5298 25.2697 43.5289 25.2703 43.528L45.3518 12.8593C46.1987 11.6045 46.2635 9.98669 45.5271 8.6689L45.5271 8.6689L45.5247 8.66452C44.783 7.34508 43.3608 6.56098 41.8559 6.62665C40.5413 6.67669 39.3335 7.37007 38.6291 8.48243L21.0772 35.3352L10.6773 26.3486C9.63218 25.3206 8.10045 24.9415 6.68618 25.3835C5.25123 25.8294 4.18088 27.0461 3.93012 28.535Z"
              fill={props.todoState ? "green" : "#808080"} // Cambia el color dinámicamente
              stroke={props.todoState ? "green" : "#808080"} // Cambia el color del borde dinámicamente
              strokeWidth="4"
            />
          </svg>


        </span>
        <p className={`${style['TodoItem-p']} ${style['TodoItem-p--completed']} ${props.todoState && style['TodoItem-p--active']}`}>{props.text}</p>
        <Eliminar onClick={()=>props.deleteTodo(props.id)}/>
    </li>

  )
}

export {Todo};