import React, { Component } from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";

class Main extends Component {
	exampleName = 'Magnus';

	example = ( ) => {
		let element = (
			<div>
				<h2>Name: { this.exampleName }</h2>
			</div>
		);

		return element;
	}

	phpLoaded = ( ) => {
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
			)
	}

	render() {
		return (
			<div className="luksus">{ this.phpLoaded() }</div>
		);
	}
}
export default Main;
const wrapper = document.getElementById( 'react-load' );
ReactDOM.render(<Main />, wrapper);
