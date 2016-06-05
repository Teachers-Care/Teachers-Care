import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class Home extends Component {

	render(){

		return(

			<div className="home">
				<img src="../images/helping-hand.jpg"/>
				<Link to="/report-a-student">
					<button className="big-button">
						Report Now
					</button>
				</Link>
				<div><Link to="/admin"><button className="small-button">For Administrators</button></Link></div>

			</div>
			
		)
	}
}

