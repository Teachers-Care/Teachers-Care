
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class ThankYou extends Component {

  render() {
    return(
      <div className="thank-you">

        <div style='margin-right: auto; margin-left: auto;text-align: center'>

          <H1>You're making a difference!</H1>

          <p>Thank you for participating in the Teachers CARE initiative. Your participation brings us one step closer to eliminating child pretators.</p>

          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/vGgDj-xZJ7o">
          </iframe>

          <p>Additional Resources</p>
          <a href="https://traffickingresourcecenter.org/">National Human Trafficking Resource Center Hotline 1-888-373-7888</a>
          <a href="http://polarisproject.org/human-trafficking">Polaris Project</a>
          <a href="http://humantrafficking.org">Human Trafficking</a>
          <a href="http://www.soroptimist.org/trafficking/faq.html">Soroptimist</a>

          </div>

        </div>

      )
  }
}