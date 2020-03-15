import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

export class Dynamic extends Component {
	element = ''

	constructor() {
		super();
		this.element = this.bootstrap();
	}



	bootstrap = () => {
		fetch( 'http://localhost:9090/endpoints/xhr/test.php?test' )
		.then( res => res.json() )
		.then(
			( data ) => {
				return (
					test
				);
			},
			( error ) => {
			//	this.setState({
			//		isLoaded: true,
			//		error
			//	});
			}
		);

	}

	render() {
		return (
			<p>test</p>
		)
	}
}
