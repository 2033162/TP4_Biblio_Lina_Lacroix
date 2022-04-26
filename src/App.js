import {useState} from 'react'
import './App.css';
import Header from "./components/header";
import Clients from "./components/client/Clients";
import Employes from "./components/employe/Employes";
import Documents from "./components/document/Documents";
import AddClient from "./components/client/AddClient";

function App() {

    const [showAddClient, setShowAddClient] = useState(false)

    const [clients, setClients] = useState(
        [
            {
                id: 1,
                nom: "John",
                prenom: "Smith",
                rue: "Daragon",
                ville: "Montreal",
                codePostal: "H05C42",
                numeroTelephone: "514-900-5698",
                dateInscription: "2022/02/20",
            },
            {
                id: 2,
                nom: "Marvin",
                prenom: "Stewart",
                rue: "LaSale",
                ville: "Montreal",
                codePostal: "H05C53",
                numeroTelephone: "514-900-7643",
                dateInscription: "2022/02/22",
            }
        ]
    )

    const addClient = (client) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newClient = {id, ...client}
        setClients([...clients, newClient])
    }

    const deleteClient = (id) => {
        setClients(clients.filter((client) => client.id !== id))
    }

    const [documents, setDocuments] = useState(
        [
            {
                id: 1,
                etatDocument: "DISPONIBLE",
                genreDocument: "CD",
                titre: "harry potter",
                auteur: "JK. Rolling",
                editeur: "maison edition",
                anneePublication: 2000,
                nbrExemplaire: 3,
            }
        ]
    )

    const [employes, setEmployes] = useState(
        [
            {
                id: 1,
                nom: "Sabrina",
                prenom: "Carmier",
                fonction: "GESTIONNAIRE",
            }
        ]
    )

  return (
      <div className='container'>
        <Header onAdd={() => setShowAddClient(!showAddClient)}
        showAdd={showAddClient}/>
          {showAddClient && <AddClient onAdd={addClient} />}
          {clients.length > 0 ?
              <Clients clients={clients}
              onDelete={deleteClient}/>
              : 'No Clients'}
          <Employes employes={employes}/>
          <Documents documents={documents}/>
      </div>
  );
}

export default App;
