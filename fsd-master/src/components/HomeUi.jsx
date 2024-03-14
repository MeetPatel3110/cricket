import React from 'react'
import './HomeUi.css';
import { NavLink } from 'react-router-dom';

const HomeUi = () => {
  return (
      <navig>
      <div className='hcontainer'>
        <div className='hcontent border'>
            <h1>Cricket Players States</h1>
            <p>Welcome to our website! Here, you can explore ODI statistics of international cricket players. Feel free to add players to view their stats and stay updated with the latest information.</p>
                      
                <NavLink to='/teams'>Let's Get Started</NavLink>
            

       
        </div>
          

      </div>
      </navig>
    
  )
}

export default HomeUi