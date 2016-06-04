import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class Admin extends Component {

  render(){

    return(

      <div className="admin">
        <div>Admin PAge</div>
        <img src="http://fillmurray.com/30/30"/>
        <img src="http://fillmurray.com/30/30"/>
        <img src="http://fillmurray.com/30/30"/>
        <img src="http://fillmurray.com/30/30"/>
        <img src="http://fillmurray.com/30/30"/>
        <img src="http://fillmurray.com/30/30"/>
        <img src="http://fillmurray.com/30/30"/>
      
      </div>

    )
  }
}