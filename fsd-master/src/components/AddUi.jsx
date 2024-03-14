import React, { useEffect, useState } from 'react'
import './addui.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';


const AddUi = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const [uri,setUri]=useState([]);
  const [Tid,setTid]=useState(null);
  const api='';
  

      const [post,setPost] = useState({
        playerName: '',
        matches: null,
        runs: null,
        best: null,
        p50s: null,
        p100s: null,
        avg: null,
        wickets: null,
        sr: null
       })
       useEffect(()=>{
        if (location.state && location.state.api) {
          const api = location.state.api1;
          const id = location.state.id1;
          setUri(api);
          setTid(id); 
    }},[location]);

      const handleInput = (e) => {
          setPost({...post,[e.target.name]: e.target.value})
      }

      function handleSubmit(e){
        e.preventDefault();
        const addUri = location.state.addUri;
        axios.post(addUri,post)
        .then(resp => console.log(resp))
        .catch(err => console.log(err));

        navigate('/teams');
      }


  return (
    <div className='addui'>
    <form onSubmit={handleSubmit}>  
    <div class="form">
    <div class="title">Player Details</div>
    
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

export default AddUi