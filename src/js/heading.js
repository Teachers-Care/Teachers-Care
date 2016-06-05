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

				<div><h2>Help students get the help they need.</h2></div>

					{this.props.children}
				<footer>
					<div className="footer-button-bar">
						<div><Link to="/resources"><button className="small-button">Additional Resources</button></Link></div>
						<div><Link to="/admin"><button className="small-button">For Administrators</button></Link></div>
					</div>
					<div className="copyright">&copy; 2016</div>
				</footer>
			</div>
		)
	}
}