import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-4.mp4" autoPlay loop muted />
            <h1>Predict Stock Prices!</h1>
            <p>Use our free tool today!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED <i class="fas fa-angle-double-right"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
