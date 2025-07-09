import React from 'react'
import Accordion from '../components/accordion/Accordion'
import { Helmet } from 'react-helmet'
import Faqpage from '../components/pageheader/Faqpage'

function Faq() {
  return (
    <>
      <Helmet>
        <title>Faq</title>
        <meta name="description" content="Faq application" />
    </Helmet>
    <Faqpage/>
    <Accordion/>
    </>
  )
}

export default Faq