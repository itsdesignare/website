import React from 'react'
import '../styles/ourgoal.css'
import ourgoal from '../assets/ourgoal.svg'
export const Ourgoal = () => {
  return (
    <>
    <div className="image-wrapper">
    <img src={ourgoal} alt="" />
    </div>
     <div className="ourgoal-line">
     <svg xmlns="http://www.w3.org/2000/svg" width="159" height="4" viewBox="0 0 159 4" fill="none">
        <path d="M2 2L157 2.00001" stroke="black" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
    </svg>
     </div>
    <div className="heading-ourgoal">
    Our Goal
    </div>
    <div className="paragraph-ourgoal">
    With Designare , We plan to create <span>a platform </span>for all aspiring designers and even for the existing designers to join in and contribute in making an amazing community.
    </div>

    <div className="stats">
        <div className="stat1">
            <h1>100+</h1>
            <p>Members</p>
        </div>
        <div className="dotted-line">
        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="63" viewBox="0 0 3 63" fill="none">
<line x1="1.5" y1="6.55672e-08" x2="1.5" y2="12" stroke="black" stroke-width="3"/>
<line x1="1.5" y1="17" x2="1.5" y2="29" stroke="black" stroke-width="3"/>
<line x1="1.5" y1="34" x2="1.5" y2="46" stroke="black" stroke-width="3"/>
<line x1="1.5" y1="51" x2="1.5" y2="63" stroke="black" stroke-width="3"/>
</svg>
        </div>
        <div className="stat2">
            <h1>20k</h1>
            <p>Views</p>
        </div>
        <div className="dotted-line">
        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="63" viewBox="0 0 3 63" fill="none">
<line x1="1.5" y1="6.55672e-08" x2="1.5" y2="12" stroke="black" stroke-width="3"/>
<line x1="1.5" y1="17" x2="1.5" y2="29" stroke="black" stroke-width="3"/>
<line x1="1.5" y1="34" x2="1.5" y2="46" stroke="black" stroke-width="3"/>
<line x1="1.5" y1="51" x2="1.5" y2="63" stroke="black" stroke-width="3"/>
</svg>
        </div>
        <div className="stat3">
            <h1>75%</h1>
            <p>Growth Rate</p>
        </div>
    </div>
    </>
  )
}
