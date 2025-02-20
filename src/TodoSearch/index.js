import React from "react";
import style from "./Search.module.css";
import  Buscar  from "./icons8-búsqueda-96.png";

function TodoSearch(props) {
    
    return(
        <div className={style.contenedor}>
            <input className={style.buscador} type="text" placeholder="Buscar tarea" value={props.searchValue} onChange={(event)=>{props.setSeachValue(event.target.value)}} />
            <button className={style.boton}><img className={style.logo} src={Buscar} alt="" /></button>
        </div>
        
    )
    
}
export {TodoSearch};