import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class Heading extends Component {

	render(){
		return(
			<div className="heading">
				<div><h1>A Helping Hand</h1></div>
				<div><h2>100% anonymous tip-line.</h2></div>
					{this.props.children}
				<footer>
<<<<<<< HEAD
					<div><Link to="/admin"><button className="small-button">For Administrators</button></Link></div>
					<div>&copy; 2016</div>
=======
						<div>&copy; 2016</div>
>>>>>>> bead08fd4c789d739032c67fd1e00fe70dbfe1d2
				</footer>
			</div>
		)
	}
}