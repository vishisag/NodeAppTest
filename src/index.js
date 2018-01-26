import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Header from './Header.jsx';
import Login from './Login.jsx';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />,document.getElementById('root'));
ReactDOM.render(<Login />,document.getElementById('root'));
registerServiceWorker();
