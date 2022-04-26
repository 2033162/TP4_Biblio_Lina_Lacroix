import Document from "./Document";
const Documents = ({documents}) => {
    return (
        <>
            {documents.map((document) => (
                <Document key={document.id} document={document}/>
            ))}
        </>
    )
}

export default Documents