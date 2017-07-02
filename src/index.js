import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import './CSS/App.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import PageHead from './Components/PageHead.js';
import MenuBar from './Components/MenuBar.js';
import RegisterForm from './Components/RegisterForm.js';

ReactDOM.render(
	<Router history={hashHistory}>	
		<div>
			<MenuBar />
			<PageHead title={"BC Induction"}/>
			<RegisterForm />
		</div>
	</Router>,
  	document.getElementById('root')
);
