// React stuff
import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';
// Pages
import App from './Pages/App.js';
// CSS
import './index.css';

ReactDOM.render(
	<HashRouter>	
		<App />
	</HashRouter>,
  	document.getElementById('root')
);

