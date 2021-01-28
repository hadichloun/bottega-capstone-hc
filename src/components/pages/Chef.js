import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Chef.css';


function Chef() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" /> 
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
                
            </div>
          </div>
          
    )
}

export default Chef 