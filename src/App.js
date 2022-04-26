import {useState} from 'react'
import './App.css';
import Header from "./components/header";
import Clients from "./components/Clients";
import Employes from "./components/Employes";

function App() {

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
  return (
      <div className='container'>
        <Header/>
          <Clients clients={clients}/>
          <Employes employes={employes}/>
      </div>
  );
}

export default App;
