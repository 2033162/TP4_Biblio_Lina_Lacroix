const Client = ({client}) => {
    return (
        <div className="client">
            <h3>{client.fullName}</h3>
            <p>{client.numeroTelephone}</p>
        </div>
    )
}

export default Client