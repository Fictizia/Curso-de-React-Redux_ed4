import React from 'react';

import '../styles/Header.css';

export const Header = (props) => {
  // Destructuring:
  // En este caso, `const { children } = props` === `const children = props.children`
  // ese `children = "This is a Title"` no asigna valores a children, sino que aporta un valor por defecto
  // Este valor por defecto de props.children es vital para que no sea `undefined` en el caso de que la instancia no tenga `children`.
  const { children = 'This is a Title' } = props;

  // en JSX, las llaves evalúan JS. En el caso de un children, sin llaves se trata de un string
  return <h1 className='tdl-main_title'>{children}</h1>
}
