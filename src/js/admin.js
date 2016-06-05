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
  // <table>
  //   <thead>
  //     <tr>
  //         <th data-field="id">Name</th>
  //         <th data-field="grade">Grade</th>
  //         <th data-field="date">Dates</th>
  //         <th data-field="Reports">Reports</th>
  //     </tr>
  //   </thead>

  getStudent(student) {

    return (
      <tr className="student-item" key={student._id}>
        <td>{student.name.first}</td>
        <td>{student.name.last}</td>
        <td>{student.grade}th</td>
        <td>{student.reports.risks}</td>
      </tr>
      )
  }

    render() {

      return(

        <div className="admin">
        <table>
          <thead>
            <tr>
                <th data-field="id">First Name</th>
                <th data-field="id">Last Name</th>
                <th data-field="grade">Grade</th>
                <th data-field="Reports">Reports</th>
            </tr>
          </thead>
<tbody>


            <tr >{data.map(this.getStudent)}</tr>

            </tbody>
            </table>
        </div>

    )
  }
}
  // </table>
