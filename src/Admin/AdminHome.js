import React, { Component } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import LeftNav from './LeftNav';
import ApplicationStatus from './ApplicationStatus';

export class AdminHome extends Component {
  render() {
    return (
      <div>
        <LeftNav/>
        <ApplicationStatus/>
      </div>
    )
  }
}

export default AdminHome