import { ReactComponent as DeleteSVG } from './delete.svg'
import './Icons.css'

function Iconos({ type, onClick }) {
    return(
        <span className={`Icon Icon-${type}`} onClick={onClick}>
            <DeleteSVG className="deleteIcon"/>

        </span>
    )
}

export {Iconos}