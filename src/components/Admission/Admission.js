import React, { Component } from 'react'
import EligibiltyCri from './EligibiltyCri'
import EntranceReq from './EntranceReq'
import AdmissionCri from './AdmissionCri'
import WeOffer from './WeOffer'

export class Admission extends Component {
  render() {
    return (
      <div className='w-11/12 mx-auto'>
        <WeOffer/>
        <EligibiltyCri/>
        <EntranceReq/>
        <AdmissionCri/>
      </div>
    )
  }
}

export default Admission