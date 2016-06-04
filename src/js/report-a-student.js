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
				<SSF>
					<h1>Student Note</h1>
					<p>Select a concern and submit anonymously.</p>
					<label>
						(1)
						<input type="checkbox" />
						Is dating a significantly older person.
					</label>
					<label>
						(2)
						<input type="checkbox" />
						Frequently travels with an older person who is not their guardian.
					</label>
					<label>
						(3)
						<input type="checkbox" />
						Freqently absent from class. 
					</label>
					<label>
						(4)
						<input type="checkbox" />
						Suddenly changed appearance or style, especially if of a provocative nature.
					</label>
					<label>
						(5)
						<input type="checkbox" />
						Frequently travels with an older person who is not their guardian.
					</label>
					<label>
						(6)
						<input type="checkbox" />
						Frequently travels with an older person who is not their guardian.
					</label>
					<label>
						(7)
						<input type="checkbox" />
						Frequently travels with an older person who is not their guardian.
					</label>
					<label>
						(8)
						<input type="checkbox" />
						Frequently travels with an older person who is not their guardian.
					</label>
					<button>Submit</button>
				</SSF>
			</div>
		)
	}
}