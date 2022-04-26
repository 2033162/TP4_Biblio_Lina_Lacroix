import Employe from "./Employe";
const Employes = ({employes, onDelete, onToggle}) => {
    return (
        <>
            {employes.map((employe) => (
                <Employe key={employe.id}
                         employe={employe}
                         onDelete={onDelete}
                         onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Employes