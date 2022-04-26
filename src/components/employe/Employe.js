import { FaTimes} from 'react-icons/fa'

const Employe = ({employe, onDelete, onToggle}) => {
    return (
        <div className="employe"
             onDoubleClick={() => onToggle(employe.id)}>
            <h3>{employe.nom} <FaTimes
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(employe.id)}/></h3>
            <p>{employe.fonction}</p>
        </div>
    )
}

export default Employe