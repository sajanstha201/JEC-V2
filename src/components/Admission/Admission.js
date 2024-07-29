import React, { Component } from 'react'
import EligibiltyCri from './EligibiltyCri'
import EntranceReq from './EntranceReq'

export class Admission extends Component {
  render() {
    return (
      <div>
        <EligibiltyCri/>
        <EntranceReq/>
      </div>
    )
  }
}

export default Admission