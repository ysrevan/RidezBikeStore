import React from 'react'
import Ride from '../components/ride/Ride'
import Aboutpage from '../components/pageheader/Aboutpage'
import Aboutexperience from '../components/aboutexprience/Aboutexperience'
import Abouthumble from '../components/abouthumble/Abouthumble'
import Aboutsupport from '../components/aboutsupport/Aboutsupport'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About application" />
    </Helmet>
    <Aboutpage/>
    <Aboutexperience/>
     <Ride/>
     <Abouthumble/>
     <Aboutsupport/>
    </>
  )
}

export default About