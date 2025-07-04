import React from 'react'
import Contactpage from '../components/pageheader/Contactpage'
import Contactmap from '../components/contactmap/Contactmap'
import Contacttexts from '../components/contacttexts/Contacttexts'
import Contactemail from '../components/contactemail/Contactemail'

function Contact() {
  return (
    <>
    <Contactpage/>
    <Contactmap/>
    <Contacttexts/>
    <Contactemail/>
    </>
  )
}

export default Contact