
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class ThankYou extends Component {

  render() {
    return(
      <div className="thank-you">
          <div><h2>You're making a difference!</h2></div>

          <div><p>Thank you for participating in the Teachers CARE initiative.</p></div>
          <div><p>Your participation brings us one step closer to eliminating child predators.</p></div>
          
          <div>
            <iframe 
              src="https://www.youtube.com/embed/vGgDj-xZJ7o">
            </iframe>
          </div>
      </div>

    )
  }
}

// <Link to="/resources">Additional Resources</Link>