import React from 'react';
import ReactDOM from "react-dom";
import { NavLink, Switch, Route } from 'react-router-dom';
import Routes from "./Routes/Routes";
import Navigation from "./Components/Navigation/Navigation";


const App = () => (
	<div className='app'>
		<h1>React Router Demo</h1>
		<Navigation />
		<Routes />
	</div>
);

export default App;
