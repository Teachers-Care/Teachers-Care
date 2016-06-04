import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';
import { Heading } from './heading';
import { Home } from './home';

export default class ReportAStudent extends Component {

	render(){

		return(

			<div>
				<div>Report A Student Form</div>

				<div>Student Name</div>

				<div>Grade</div>

				<div>Form </div>
			</div>
		)
	}
}