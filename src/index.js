// React stuff
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Components
import PageLayout from './Components/PageLayout.js';
import MenuBar from './Components/MenuBar.js';
import RegisterForm from './Components/RegisterForm.js';
// Pages
import QuizPage from './Pages/QuizPage.js';
import WelcomePage from './Pages/WelcomePage.js';
import OurValues from './Pages/OurValues.js';
import About from './Pages/About.js';
// CSS
import './index.css';

ReactDOM.render(
	<BrowserRouter>	
		<div>
			<MenuBar />
			<RegisterForm />
			<Route path='/' component={PageLayout}>
				<Route path='/WelcomePage' component={WelcomePage} />
				<Route path='/QuizPage' component={QuizPage} />
				<Route path='/OurValues' component={OurValues} />
				<Route path='/About' component={About} />
			</Route>
		</div>
	</BrowserRouter>,
  	document.getElementById('root')
);
