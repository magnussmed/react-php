import React from 'react';
import ReactDOM from "react-dom";
import { NavLink, Switch, Route } from 'react-router-dom';


const Primary = () => (
	<Switch>
		<Route exact path='' component={Home}></Route>
		<Route exact path='/' component={Home}></Route>
		<Route exact path='/about' component={About}></Route>
		<Route exact path='/contact' component={Contact}></Route>
	</Switch>
);

export default Main;
