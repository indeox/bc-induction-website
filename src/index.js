// React stuff
import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';
// Pages
import App from './Pages/App.js';
// CSS
import './index.css';
import './CSS/bootstrap-3.3.7-dist/css/bootstrap.css';
import './CSS/bootstrap-3.3.7-dist/css/bootstrap.min.css';

ReactDOM.render(
	<HashRouter>	
		<App />
	</HashRouter>,
  	document.getElementById('root')
);

