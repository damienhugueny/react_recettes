// == Import npm
import React from 'react';

// == Import
import Header from '../Header/Header';
import Ingredients from '../Ingredients/Ingredients';
import Steps from '../Steps/Steps';

import data from '../../data/recipes';

import './app.scss'

/* Etapes :
- inrégration statique (sans props)
  - découpage de l'interface en composants => tracer des recatngles
  - écriture des composants sous forme de div dans App/index.js
  - écriture de chaque composant (nouveau dossier, par exemple
    src/components/Header, avec fichiers index.js et header.css)

  - dynamisation (utilisation des données, appel à une API, ...)
*/

// == Composant
const App = () => {

  console.log(data.title);

  /*
    <Header title="LE TITRE"/>
    => React crée un objet props
    {
      title: "LE TITRE",
      author: "John"
    }
  */

  return (
    <div className="app">
      <Header title={data.title}
              author={data.author}
              difficulty={data.difficulty}
              thumbnail={data.thumbnail}
      />
      <Ingredients ingredients={data.ingredients}/>
      <Steps steps={data.instructions}/>
    </div>

  );
};

// == Export
export default App;
