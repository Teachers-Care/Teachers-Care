import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

import data from './student-data.js';

export default class Admin extends Component {

  getRisks(risk) {
    console.log('hello');

    let { oneRisk } = data.reports.risks;
    return (
      <div className="risk-item">
        {oneRisk.riskID}
      </div>
      )
  }

  getReports(report) {
    let { oneReport } = data.reports;
    console.log('one report', oneReport);

    return (
      <div className="report-item">
        <div>{oneReport.registered}</div>
        <div>{oneReport.comment}</div>
        <div className="risks">
          {data.map(::this.getRisks)}
        </div>

      </div>

      )
  }
  // <table>
  //   <thead>
  //     <tr>
  //         <th data-field="id">Name</th>
  //         <th data-field="grade">Grade</th>
  //         <th data-field="date">Dates</th>
  //         <th data-field="Reports">Reports</th>
  //     </tr>
  //   </thead>

  // getStudent(student) {
  //   console.log('this is the getStudent function');
  //   return (
  //     <tr className="student-item" key={student._id}>
  //       <td>{student.name.first}</td>
  //       <td>{student.name.last}</td>
  //       <td>{student.grade}th</td>
  //       {/*<td>{student.reports.risks}</td>*/}
  //     </tr>
  //     )
  // }

    render() {

      return(

        <div className="admin">
        <table className="table">
          <thead>

            <tr>
                <th data-field="id">First Name</th>
                <th data-field="id">Last Name</th>
                <th data-field="grade">Grade</th>
                <th data-field="Reports">Date</th>
                <th data-field="Reports">Risks</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tabitha</td>
              <td>Carter</td>
              <td>5th</td>
              <td>April 24th 2016</td>
              <td>Dating, Travel, Runaway</td>
            </tr>

            <tr>
              <td>Castillo</td>
              <td>Campos</td>
              <td>6th</td>
              <td>March 23, 2016</td>
              <td>Travel, Homeless, Tattoo</td>
            </tr>

            <tr>
              <td>Flores</td>
              <td>Pace</td>
              <td>7th</td>
              <td>September, 2 2016</td>
              <td>Runaway, Truant, Provocative, Explicit-Online</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            {/*<tr>{data.map(this.getStudent)}</tr>*/}

            </tbody>
            </table>
        </div>

    )
  }
}

