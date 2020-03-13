import React, { Component } from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import Dynamic from "./dynamic.js";

class Main extends Component {
	exampleName = 'Joe';

	example = ( ) => {
		let element = (
			<div>
				<h2>Name: { this.exampleName }</h2>
			</div>
		);

		return element;
	}

	render() {
		return (
			<div className="luksus">{ this.example() }</div>
		);
	}
}
export default Main;
const wrapper = document.getElementById( 'react-load' );
ReactDOM.render(<Main />, wrapper);
