import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class Heading extends Component {

	render(){
		return(
			<div className="heading">
				<div className="header">
					<div className="logo-wrapper">
						<Link to="/">
							<img className="logo" 
									 src="./images/teachers-care-logo.png"/>
						</Link>
					</div>

					<div>
							<h1>A Helping Hand</h1>
					</div>

				</div>
				{/*<div><h2>100% anonymous tip-line.</h2></div>*/}
					{this.props.children}
				<footer>
					<div>&copy; 2016</div>
				</footer>
			</div>
		)
	}
}