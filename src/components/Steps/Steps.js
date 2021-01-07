import React from 'react';

// librairie pour valider les type de chaques props;
import PropTypes from 'prop-types';

import './steps.scss';

/* key (prop spécial) est utilisé par React pour la reconciliation entre le DOM
virtuel et le DOM réel (pouvoir repérer quel élément a été supprimé, par exemple)
=> la valeur de key doit être unique et stable dans le temps (pas index),
idéalement on utilise un id, ici on n'en a pas donc on prend la valeur
*/
const Steps = ({ steps }) => (
  <ul className="steps">

    {steps.map((step)=>(

      <li key={step} className="step">
        {step}
      </li>

    ))}

  </ul>
);

// je déclare le type de chaque prop pour pouvoir valider => un warning sera affiché
// dans la console si la prop n'a pas le type indiqué
Steps.propTypes = {
  // nom de la prop: type attendu
  // isRequired indique que la prop est obligatoire
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Steps;
