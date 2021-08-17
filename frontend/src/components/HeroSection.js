import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { StockButton } from './StockButton';
// import { Link } from 'react-router-dom';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-4.mp4" autoPlay loop muted />
            <h1>Predict Stock Prices!</h1>
            <p>Use our free tool today!</p>
            <div className="hero-btns">
                <StockButton className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    STOCK DATA <i class="fas fa-info-circle"></i>
                </StockButton>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    GET STARTED <i class="fas fa-angle-double-right"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
