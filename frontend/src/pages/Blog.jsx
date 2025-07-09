import React from 'react'
import Blognews from '../components/blognews/Blognews'
import Blogpage from '../components/pageheader/Blogpage'
import { Helmet } from 'react-helmet'

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Blog application" />
    </Helmet>
    <Blogpage/>
     <Blognews/>
    </>
  )
}

export default Blog