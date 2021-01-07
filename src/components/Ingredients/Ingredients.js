import React from 'react';

// librairie pour valider les type de chaques props;
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';
import './ingredients.scss';

// Ingredients sert de passe-plat pour fournir l'ingrédient à Ingredient
// ... => spread operator, on déverse tout ce qui est dans ingredient
// {...ingredient} => { name, quantity, unit, id}
const Ingredients = ({ ingredients }) => (

  <ul className="ingredients">

    {ingredients.map((ingredient) => (
      <Ingredient
        key={ingredient.id}
        {...ingredient}
      />
    ))}

  </ul>

);

Ingredients.propTypes = {
  // tableau d'objets
  // ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  // c'est mieux de préciser la forme de l'objets
  ingredients: PropTypes.arrayOf(
    // a la forme d'un objets
    PropTypes.shape({
      // avec telles propriétés
      // on indique seulement les propriétés qu'on utilise dans le composant Ingredients
      id : PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
}

export default Ingredients;
