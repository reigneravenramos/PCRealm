import React from 'react';
import SmoothScroll from 'smooth-scroll';
import './LandingPage.css';

const LandingPage = () => {
    const handleBuyNow = () => {
        const scroll = new SmoothScroll();
        const anchor = document.querySelector('#build-pc');
        if (anchor) {
            scroll.animateScroll(anchor);
        }
    };

    return (
        <div className="landing-page">
            <nav className="navbar">
                <div className="brand">PCREALM</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <span role="img" aria-label="search">🔍</span>
                </div>
                <div className="nav-right">
                    <button className="build-pc-link-btn" onClick={handleBuyNow}>BUILD A PC</button>
                    <div className="user-icon">👤</div>
                </div>
            </nav>

            <div className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        LOOKING FOR PC<br />PARTS?
                    </h1>
                    <p className="hero-subtitle">PCRealm is here to help you!</p>
                    <button className="buy-now-btn" onClick={handleBuyNow}>
                        Buy Now!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
