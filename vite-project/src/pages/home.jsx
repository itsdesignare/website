import React from 'react'
import '../styles/home.css'
import Navbar from '../components/navbar'
import { Hero } from '../components/hero'
import { Reasons } from '../components/reasons'
const home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        {/* <Reasons/> */}
    </div>
  )
}

export default home