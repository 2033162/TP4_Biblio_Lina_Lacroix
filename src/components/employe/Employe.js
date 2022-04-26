const Employe = ({employe}) => {
    return (
        <div className="employe">
            <h3>{employe.nom}</h3>
            <p>{employe.fonction}</p>
        </div>
    )
}

export default Employe