import  React from "react";
import { Iconos } from '../Iconos'

function Eliminar({ onClick }) {
    return (
        <Iconos type="eliminar" onClick={onClick}/>
    )
}

export { Eliminar };