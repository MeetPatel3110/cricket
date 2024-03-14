import React, { useState } from 'react';
import axios from 'axios';
import './updateui.css'
import { useParams } from 'react-router-dom';

const UpdateUi = () => {
    const { pid } = useParams();
    const [formData, setFormData] = useState({
        pid: pid,
        playerName: '',
        matches: null,
        runs: null,
        best: null,
        p50s: null,
        p100s: null,
        avg: null,
        wickets: null,
        sr: null,
        
    });

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdateSubmit = async (e) => {
        //e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/team/player/${pid}`, formData);
            console.log(response.data); 
            
        } catch (error) {
            console.error('Error updating player:', error);
            
        }
    };

   



  return (
    <div className='updateui'>
    <form onSubmit={handleUpdateSubmit}>  
    <div class="form">
    <div class="title">Player Details</div>
    
    <div class="input-container ic1">
      <input  name='pid'value={formData.pid} class="input" type="text" />
      
      
    </div>
    <div class="input-container ic1">
      <input  name='playerName' onChange={handleInput} class="input" type="text" placeholder="Player Name" />
      
      
    </div>
    <div class="input-container ic1">
      <input  name='matches' onChange={handleInput} class='input'  type="number" placeholder="Matches" />
       
      
    </div>
    <div class="input-container ic1">
      <input  name='runs' onChange={handleInput} class="input" type="number" placeholder="Runs" />
     
    </div>
    <div class="input-container ic1">
      <input  name='best' onChange={handleInput} class="input" type="number" placeholder="Best Score" />
     
    </div>
    <div class="input-container ic1">
      <input  name='p50s' onChange={handleInput} class="input" type="number" placeholder="50s" />
     
    </div>
    <div class="input-container ic1">
      <input  name='p100s' onChange={handleInput} class="input" type="number" placeholder="100s" />
     
    </div>
    <div class="input-container ic1">
      <input  name='avg' onChange={handleInput} class="input" type="number" placeholder="Average" />
     
    </div>
    <div class="input-container ic1">
      <input  name='wickets' onChange={handleInput} class="input" type="number" placeholder="Wickets" />
     
    </div>
    <div class="input-container ic1">
      <input  name='sr' onChange={handleInput} class="input" type="number" placeholder="Strike Rate" />
     
    </div>
    <button type="text" class="submit">submit</button>
  </div>
  </form>
  </div>
  )
  }

export default UpdateUi