import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class Home extends Component {

	render(){

		return(

			<div className="home">
				<img src="../images/helping-hand.jpg"/>
				<Link to="/report-a-student">Report Anonymously</Link>

			</div>

		)
	}
}

// <Link to="/thank-you">Go To Thank You Page</Link>
