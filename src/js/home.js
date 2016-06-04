import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class Home extends Component {

	render(){

		return(

			<div>
				
				<div>TEACHERS-Care</div>

				<img src="fillmurray.com/50/50" />

				<Link to="/report-a-student">Report Anonymously</Link>

			</div>

		)
	}
}