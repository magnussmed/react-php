import React, { Component } from "react";
import ReactDOM from "react-dom";

function dynamic() {
	fetch( 'http://localhost:9090/endpoints/xhr/test.php?test' )
	.then( res => res.json() )
	.then(
		( data ) => {
			let element = (
				<div>
					<h2>Data loaded: { data.response } { data.type }</h2>
				</div>
			);
			ReactDOM.render( element, document.getElementById( 'react-load' ));
		},
		( error ) => {
			this.setState({
				isLoaded: true,
				error
			});
		}
	);
}
export { dynamic };
