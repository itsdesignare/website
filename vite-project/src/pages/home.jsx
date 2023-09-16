import React from 'react'
import '../styles/home.css'
import Navbar from '../components/navbar'
import { Hero } from '../components/hero'
import { Reasons } from '../components/reasons'
import { Ourgoal } from '../components/ourgoal'

const home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Reasons/>
        <Ourgoal />
    </div>
  )
}

export default home