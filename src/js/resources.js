
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class Resources extends Component {

  render() {
    return(
      <div className="resources">
          <div>
            <img src="https://s-media-cache-ak0.pinimg.com/236x/d3/f9/9f/d3f99fb7eb3978ece065246046f177de.jpg"/>
            <a href="https://traffickingresourcecenter.org/">Trafficking Resource Center</a>
          </div>

          <div>
            <img src="https://wavewritingandvisualexpression.files.wordpress.com/2016/04/polaris-project.png?w=676"/>
            <a href="http://polarisproject.org/human-trafficking">Polaris Project</a>
          </div>

          <div>
            <img src="http://www.masterofhomelandsecurity.org/wp-content/uploads/2013/02/Human-Trafficking-org.jpg"/>
            <a href="http://humantrafficking.org">Human Trafficking</a>
          </div>

          <div>
            <img src="http://silagunabeach.org/wpsite/wp-content/uploads/2014/02/SILOGO.jpg"/>
            <a href="http://www.soroptimist.org/trafficking/faq.html">Soroptimist</a>
          </div>
      </div>

      )
  }
}