import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class Heading extends Component {

	render(){
		return(
			<div className="heading">
				<div><h1>*Heading*</h1></div>
				<div>*This heading appears on every view*</div>

					{this.props.children}

				<footer>*Footer: This footer appears on every view*</footer>
			</div>
		)
	}
}