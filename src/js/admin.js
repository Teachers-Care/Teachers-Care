import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

import data from './student-data.js';

export default class Admin extends Component {

  // getRisks(risk) {

  //   let { risk } = data.reports.risks;
  //   return (
  //     <div className="risk-item">
  //       {risk.riskID}
  //     </div>
  //     )
  // }

  // getReports(report) {
  //   let { report } = data.reports;
  //   return (
  //     <div className="report-item">
  //       <div>{report.registered}</div>
  //       <div>{report.comment}</div>
  //       <div className="risks">
  //         {data.map(::this.getRisks)}
  //       </div>

  //     </div>

  //     )
  // }

  getStudent(student) {

    return (
      <div className="student-item" key={student._id}>
        <div>{student.name.first}</div>
        <div>{student.name.last}</div>
        <div>{student.grade}th</div>
        <div className="reports">
          {/*{data.map(this.getReports)}*/}
        </div>
      </div>
      )
  }

    render() {

      return(

        <div className="admin">
          <div><h2>Student Notes</h2></div>
          <div className="students-wrapper">
            {data.map(this.getStudent)}
            </div>
          

        </div>

    )
  }
}