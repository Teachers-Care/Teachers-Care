
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class ThankYou extends Component {

  render() {
    return(
      <div className="thank-you">

        <div>Thank You for Your Help</div>
        <div>Your Students Appreciate You</div>

      </div>

      )
  }
}