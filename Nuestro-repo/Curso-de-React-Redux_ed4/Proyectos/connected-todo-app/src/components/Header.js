import React from 'react';

import '../styles/Header.css';

export const Header = (props) => {
  const { children = 'This is a Title' } = props;

  return <h1 className='tdl-main_title'>{children}</h1>
}
