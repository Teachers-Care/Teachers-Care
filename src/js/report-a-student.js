import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';
import SSF from 'react-simple-serial-form';
import Heading from './heading';
import Home from './home';

export default class ReportAStudent extends Component {

	render(){

		return(

			<div>
				<SSF>
					<h1>Student Note</h1>
					<p>Select a concern:</p>
					<div>
						<label>
							<input type="checkbox" />
							Is dating a significantly older person.
						</label>
					</div>
					
					<div>
						<label>
							<input type="checkbox" />
							Frequently travels with an older male or person who is not their guardian.
						</label>
					</div>
					
					<div>
						<label>
							<input type="checkbox" />
							Is labeled as a chronic runaway or has multiple delinquent charges.
						</label>
					</div>
					
					<div>
						<label>
							<input type="checkbox" />
							Has, or is currently experiencing homelessness.
						</label>
					</div>

					<div>
						<label>
							<input type="checkbox" />
							Has special marked tattoos, or branding on his/her body.
						</label>
					</div>

					<div>
						<label>
							<input type="checkbox" />
							Has chronic unexplained truancy.  
						</label>
					</div>
					
					<div>
						<label>
							<input type="checkbox" />
							Has started accumulating new clothes, shoes, and/or jewelry that he/she can’t account for. Includes cell phones, luxury items or an increase in income.
						</label>
					</div>

					<div>
						<label>
							<input type="checkbox" />
							Has suddenly changed his/her appearance such as dressing more provocatively.
						</label>
					</div>

					<div>
						<label>
							<input type="checkbox" />
							Has an explicitly sexual online profile found on internet community sites, internet classified ads, and/or social media sites. Or finds them looking at these things.
						</label>
					</div>

					<div>
						<label>
							<input type="checkbox" />
							Has multiple or frequent Sexually Transmitted Diseases/Infections.

						</label>
					</div>

					<div>
						<label>
							<input type="checkbox" />
							 Has multiple pregnancies or termination of pregnancies.
						</label>
					</div>

					<div>
						<label>
							<input type="checkbox" />
							 Is in foster care or involved with CPS.
						</label>
					</div>

					<div>
						<label>
							 Other:
							<input type="text" />
						</label>
					</div>
					
					<Link to="/thank-you">Submit Anonymously</Link>
				</SSF>
			</div>
		)
	}
}