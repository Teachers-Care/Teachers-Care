import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

import data from './student-data.js';

export default class Admin extends Component {

  getRisks(risk) {

    let { oneRisk } = data.reports.risks;

    return (
      <div className="risk-item">
        {oneRisk.riskID}
      </div>
      )
  }

  getReports(report) {
    
    let { oneReport } = data.reports;

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

    render() {

      return(

        <div className="admin">
        <table className="table">
          <thead>

            <tr className="top-row">
                <th data-field="id">First Name</th>
                <th data-field="id">Last Name</th>
                <th data-field="grade">Grade</th>
                <th data-field="Reports">Date</th>
                <th data-field="Reports">Risks</th>

            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td>Tabitha</td>
              <td>Carter</td>
              <td>5th</td>
              <td>April 24, 2016</td>
              <td>Dating, Travel, Runaway</td>
            </tr>

            <tr className="row">
              <td>Castillo</td>
              <td>Campos</td>
              <td>6th</td>
              <td>May 11, 2016</td>
              <td>Travel, Homeless, Tattoo</td>
            </tr>

            <tr className="row">
              <td>Flores</td>
              <td>Pace</td>
              <td>7th</td>
              <td>May 14, 2016</td>
              <td>Runaway, Truant, Provocative, Explicit-Online</td>
            </tr>

            <tr className="row">
              <td>David</td>
              <td>Mathews</td>
              <td>6th</td>
              <td>May 18, 2016</td>
              <td>Explicit-Online, Travel, STI</td>
            </tr>

            <tr className="row">
              <td>Alice</td>
              <td>Brown</td>
              <td>7th</td>
              <td>May 19, 2016</td>
              <td>Pregnancy</td>
            </tr>

            <tr className="row">
              <td>Gregory</td>
              <td>Smith</td>
              <td>6th</td>
              <td>May 21, 2016</td>
              <td>Provocative, Travel</td>
            </tr>

            </tbody>
            </table>
        </div>

    )
  }
}

