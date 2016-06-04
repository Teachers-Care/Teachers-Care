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

					<div>
						<select>
							<option value={0}>Select a student</option>
							<option value={1}>Adrienne Smith</option>
							<option value={2}>Baily Potter</option>
							<option value={3}>Benjamin Redwine</option>
							<option value={4}>Catriona Murphy</option>
							<option value={5}>Gregory Atwell</option>
							<option value={6}>Jeremy Weiner</option>
							<option value={7}>Jennifer Black</option>
							<option value={8}>Jemma Smith</option>
							<option value={9}>Justin Anderson</option>
							<option value={10}>Meredith Fields</option>
							<option value={11}>Mercedes Brie</option>
							<option value={12}>Penelope Vasquez</option>
							<option value={13}>Peter Gregory</option>
							<option value={14}>Sarah-Beth Campbell</option>
							<option value={15}>Sarah Monniot-Gailles</option>
							<option value={16}>Vanessa Holmes</option>
							<option value={17}>Wyatt Ryan</option>
							<option value={18}>Wendell Chopin</option>
						</select>
					</div>

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