import React from 'react';
import './aboutui.css';
import Logo from './../image/about.jpg';
function AboutUi() {
  return (
    <div className='about-container'>
    <div className="heading">
      <h1>ABOUT US</h1>
      <p>Our mission is simple: to provide cricket enthusiasts like you with comprehensive information, analysis, and coverage of the sport you love.</p>
    </div>
    <div className='container'>
      <section className='about'>
        <div className='about-img'>
          <img src={Logo}></img>
        </div>
        <div className='about-content'>
          <h2>Invoice Details</h2>
          <p>Welcome to CricPortal, your ultimate destination for everything related to cricket players, statistics, and teams! At CricPortal, we're passionate about cricket and dedicated to bringing you the latest updates, insights, and analysis from the world of cricket.</p>
        </div>
      </section>
    </div>

    </div>
  );
}

export default AboutUi;
