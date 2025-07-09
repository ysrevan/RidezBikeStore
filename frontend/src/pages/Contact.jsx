import React from 'react'
import Contactpage from '../components/pageheader/Contactpage'
import Contactmap from '../components/contactmap/Contactmap'
import Contacttexts from '../components/contacttexts/Contacttexts'
import Contactemail from '../components/contactemail/Contactemail'
import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact application" />
    </Helmet>
    <Contactpage/>
    <Contactmap/>
    <Contacttexts/>
    <Contactemail/>
    </>
  )
}

export default Contact