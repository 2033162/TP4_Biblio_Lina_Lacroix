const Client = ({client}) => {
    return (
        <div className="client">
            <h3>{client.nom}</h3>
            <p>{client.numeroTelephone}</p>
        </div>
    )
}

export default Client