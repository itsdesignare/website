import React from 'react'
import '../styles/hero.css'
import heroimage from '../assets/hero_picture.png'
export const Hero = () => {
  return (
    <>  <div className="image">
    <img src={heroimage} alt="" />
</div>
    <div className='hero'>
       
        <div className="heading-text">
        Editing <br/> & <span>Design </span><br/>Community
        </div>
        <div className="body-text">
        Learn, Explore and network in this <br/>
        growing industry with the help of designare 
        </div>
        <div className="container-btn">
        <a href="#">
        <div className="btn">
        join now!
        </div>
        </a>
        </div>
       
    </div>
    </>
  )
}
