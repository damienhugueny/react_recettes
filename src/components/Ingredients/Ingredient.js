// Sous-composant de Ingredients, utilisé seulement par Ingredients, donc on le
// range à l'intérieur du dossier. Son CSS reste dans ingredients.css, donc on a
// seulement besoin d'un fichier JS => Ingredient.js
import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ name, unit, quantity }) => (
  <li className="ingredient">
    <span className="quantity">{quantity} {unit}</span> {name}
  </li>
);

Ingredient.propTypes = {
  quantity : PropTypes.number.isRequired,
  unit : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
};

export default Ingredient;
