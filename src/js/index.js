// Javascript Entry Point
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

import Heading from './heading';
import Home from './home';
import ReportAStudent from './report-a-student';
import ThankYou from './thank-you';
import Admin from './admin';

ReactDOM.render((
	<Router history={hashHistory}>
		<IndexRoute component={Home} />
		<Route path="/" component={Heading} />
    	<Route path="/thank-you" component={ThankYou}/>
        <Route path="/report-a-student" component={ReportAStudent} />
		<Route path="/admin" component={Admin} />
	</Router>), 
	document.querySelector('.app'));
