import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted/> 
            <h1>Sizzling Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                   className='btns' 
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                   GIFT CARDS 
                </Button>
                <Button 
                   className='btns' 
                   buttonStyle='btn--primary'
                   buttonSize='btn--large'
                >
                   Meet The Chef <i className='far fa-play-circle' />
                   
                </Button>
                <Button 
                   className='btns' 
                   buttonStyle='btn--primary'
                   buttonSize='btn--large'
                >
                  practice button <i className='far fa-play-circle' />
                   
                </Button>
            </div>
            </div>
          
    )
}

export default HeroSection 

