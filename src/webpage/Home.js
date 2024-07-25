import React from 'react'
import { IntroductionSection } from './IntroductionSection'
import UpdatesSection from './Updates'
import Events from '../components/AboutUsPage/Events'
import  AboutUniversity from '../components/AboutUsPage/AboutUniversity'

export default function Home() {
  return (
    <div>
      <IntroductionSection/>
      <UpdatesSection/>
      <Events/>
      <AboutUniversity/>
    </div>
  )
}
