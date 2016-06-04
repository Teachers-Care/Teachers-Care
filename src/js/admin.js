import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

import data from './student-data.js';

export default class Admin extends Component {

  // static propTypes = {
  //   students: PropTypes.array.isRequired
  // }

  getStudent(student) {
    let { data } = this.props;

    return (
      <div className="student-item">
        <div>{data.name.first}</div>
        <div>{data.name.last}</div>
        <div>{data.grade}</div>
      </div>

      )
  }

    render() {

      let { students } = this.props;

      return(

        <div className="admin">
          <div>Admin PAge</div>
          <div className="students-wrapper">{students.map(::this.getStudent)}</div>
          <div><img src="http://fillmurray.com/30/30"/></div>
          <div><img src="http://fillmurray.com/30/30"/></div>
          <div><img src="http://fillmurray.com/30/30"/></div>
          <div><img src="http://fillmurray.com/30/30"/></div>
          <div><img src="http://fillmurray.com/30/30"/></div>
          <div><img src="http://fillmurray.com/30/30"/></div>

        </div>

    )
  }
}