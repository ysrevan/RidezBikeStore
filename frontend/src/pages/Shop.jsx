import React from 'react'
import Shopproducts from '../components/shopproducts/Shopproducts'
import Shoppage from '../components/pageheader/Shoppage'
import { Helmet } from 'react-helmet'

function Shop() {
  return (
    <>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="Shop application" />
    </Helmet>
    <Shoppage/>
    <Shopproducts/>
    </>
  )
}

export default Shop