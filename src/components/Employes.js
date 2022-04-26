import Employe from "./Employe";
const Employes = ({employes}) => {
    return (
        <>
            {employes.map((employe) => (
                <Employe key={employe.id} employe={employe}/>
            ))}
        </>
    )
}

export default Employes