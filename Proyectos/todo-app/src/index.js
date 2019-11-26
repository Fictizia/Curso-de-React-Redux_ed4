// Recuerda que tienes que importar React en todos los componentes + index para construir ese árbol de componentes de React
import React from 'react';
// ReactDOM porque se trata de un proyecto web
import ReactDOM from 'react-dom';
// Se va a comportar como la punta del iceberg de nuestro árbol
import App from './components/App';

// Procedamos con ese CSS modular. Se importa el archivo directamente con la ruta en forma de string
import './styles/reset.css';
import './styles/index.css';

// render de ReactDOM es un método al que le pasas una instancia de tu componente padre en primer lugar
// en segundo lugar apuntamos al elemento del (real) DOM con id "root" (dentro de public/index.html)
ReactDOM.render(<App />, document.getElementById('root'));
