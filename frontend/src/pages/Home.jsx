import React from 'react'
import Hero from '../components/hero/Hero'
import Threecardhome from '../components/threecardhome/Threecardhome'
import Ride from '../components/ride/Ride'
import Twopicturehome from '../components/twopicturehome/Twopicturehome'
import Fivepicturehome from '../components/fivepicturehome/Fivepicturehome'
import Serviceshome from '../components/serviceshome/Serviceshome'
import Newsletter from '../components/newsletter/NewsLetter'
import Homenews from '../components/homenews/Homenews'
import HomeBestproducts from '../components/homebestproducts/HomeBestproducts'

function Home() {
  return (
    <>
      <Hero/>
      <Threecardhome/>
      <Ride/>
      <Twopicturehome/>
      <Serviceshome/>
      <HomeBestproducts/>
      <Newsletter/>
      <Fivepicturehome/>
      <Homenews/>
    </>
  )
}

export default Home