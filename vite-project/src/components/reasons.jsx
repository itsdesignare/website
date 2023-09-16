import React from 'react'
import '../styles/reasons.css'
export const Reasons = () => {
  return (
    <>  
    <div className="heading-text-reasons">
    Why <span>Designare?</span>
    </div>

    <div className="card-wrapper">
    <div className="card">
      <h1 className='card-heading'>Quality content</h1>
      <div className="line"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="2" viewBox="0 0 47 2" fill="none">
    <path d="M1 1H46" stroke="black" stroke-width="2" stroke-linecap="round"/>
      </svg>
      </div>
      <p className='card-paragraph'> from on demand tutorials and lectures to a proper dedicated podcast on design , we strive our best to deliver top quality content all the time!</p>
    </div>
    <div className="card-1">
    <h1 className='card-heading'>Learning
evnironment</h1>
      <div className="line"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="2" viewBox="0 0 47 2" fill="none">
    <path d="M1 1H46" stroke="black" stroke-width="2" stroke-linecap="round"/>
      </svg>
      </div>
      <p className='card-paragraph'> we have curated a dedicated learning space on our server where we will conduct interactive workshops and events for free!</p>
   
    </div>
    <div className="card-2">
    <h1 className='card-heading'>Industry
exposure</h1>
      <div className="line"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="2" viewBox="0 0 47 2" fill="none">
    <path d="M1 1H46" stroke="black" stroke-width="2" stroke-linecap="round"/>
      </svg>
      </div>
      <p className='card-paragraph'>Designare’s main mission is to make this industry worth for everyone and grow everyone’s knowledge by bringing in influencers and design pros as guests.</p>
   
    </div>
    </div>
    </>
  )
}
