import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dynamic } from "../Components/Dynamic/Dynamic";

const Routes = () => (
	<Switch>
		<Route exact path='/' component={ Home }></Route>
		<Route exact path='/about' component={ About }></Route>
		<Route exact path='/contact' component={ Contact }></Route>
	</Switch>
);

const Home = () => (
	<div className='home-page'>
		<h1>Welcome to my portfolio website</h1>
		<p> Feel free to browse around and learn more about me.</p>
	</div>
);

const About = () => (
	<div id='about-page' className='about-page'>
		<h1>About Me</h1>
		<Dynamic />
	</div>
);

const Contact = () => (
	<div className='contact-page'>
		<h1>Contact Me</h1>
		<p>You can reach me via email: <strong>hello@example.com</strong></p>
	</div>
);


export default Routes;
