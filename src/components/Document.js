const Document = ({document}) => {
    return (
        <div className="document">
            <h3>{document.titre}</h3>
            <p>{document.genreDocument}</p>
        </div>
    )
}

export default Document