import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class Heading extends Component {

	render(){
		return(
			<div className="heading">
				<div><h1>Teachers CARE</h1></div>
				<div>100% anonymous tip-line.</div>

					{this.props.children}

				<footer>&copy; 2016</footer>
			</div>
		)
	}
}