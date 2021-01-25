import React from 'react'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/videoblocks-professionally-prepared-steak-dinner_smmlrtikr7_1080__D.mov" autoPlay loop muted />
            <h1>Sizzling Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                   className='btns' 
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                   Get STARTED 
                </Button>
            </div>
          </div>
    )
}

export default HeroSection 

