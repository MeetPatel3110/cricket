import './teams.css';
import india from "./../image/indialogo.png";
import australia from "./../image/auslogo.png";
import england from "./../image/englandlogo.jpg";
import pakistan from "./../image/paklogo.png";
import srilanka from "./../image/srilankalogo.png";
import safrica from "./../image/salogo.png";
import newzealand from "./../image/nzlogo.png";
import windies from "./../image/windlogo.png";
import { useNavigate } from 'react-router-dom';
import ContactUi from './ContactUi';

const Teams = () => {

    const navigate=useNavigate();
    
    function handleButtonClick(id) {
      const apiUrl = `http://localhost:8080/api/team/${id}/player/`;
      navigate("/table", { state: { api: apiUrl, id: id } });
  }
  



    return (
    <div className='team-container'>
      <div className='box'>
        <button onClick={()=>handleButtonClick(1)}><img src={india}></img></button>
        
          <h1> INDIA </h1>
        
      </div>
      <div className='box'>
        <button onClick={()=>handleButtonClick(2)}><img src={australia}></img></button>
        <h1> AUSTRALIA </h1>
      </div>
      <div className='box'>
        <button onClick={()=>handleButtonClick(4)}><img src={pakistan}></img></button>
        <h1> PAKISTAN </h1>
      </div>
      <div className='box'>
        <button onClick={()=>handleButtonClick(3)}><img src={england}></img></button>
        <h1> ENGLAND </h1>
      </div>
      <div className='box'>
        <button onClick={()=>handleButtonClick(5)}><img src={safrica}></img></button>
        <h1> SOUTH AFRICA </h1>
      </div>
      <div className='box'>
        <button onClick={()=>handleButtonClick(6)}><img src={srilanka}></img></button>
        <h1> SRILANKA </h1>
      </div>
      <div className='box'>
        <button onClick={()=>handleButtonClick(8)}><img src={newzealand}></img></button>
        <h1> NEW ZEALAND </h1>
      </div>
      <div className='box'>
        <button onClick={()=>handleButtonClick(7)}><img src={windies}></img></button>
        <h1> WEST INDIES </h1>
      </div>
    
    </div>
    );
    }

export default Teams;


