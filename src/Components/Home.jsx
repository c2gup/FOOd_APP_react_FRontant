import React from 'react'
import Hero from './Hero'
import Dlivery from './Dlivery'
import TopFood from './TopFood'

function Home({handelcounts}) {
  return (
    <div>
      <Hero/>
      <Dlivery/>
      <TopFood handelcountt={handelcounts} />
    </div>
  )
}

export default Home
