import React, { useEffect, useState } from 'react';
import {  NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './tableui.css'

function TableUi() {
  const location = useLocation();
  const navigate=useNavigate();
    const [data, setData] = useState([]);
    const [teamId, setTeamId] = useState(null);
    const [api,setApi] = useState([]);
  
  

    useEffect(() => {
      if (location.state && location.state.api) {
          const fetapi = location.state.api;
          const id = location.state.id; // Extracting the ID from state
          setTeamId(id); // Setting the team ID state
          setApi(fetapi);

          fetch(fetapi)
              .then(response => response.json())
              .then(data => setData(data))
              .catch(error => console.error('Error fetching data:', error));
      }
  }, [location]);
      function handleAddButton(teamId){
          const addUri=`http://localhost:8080/api/team/${teamId}/`;
          navigate('/addPlayer',{ state: { addUri: addUri } });
       

      }
      function handleUpdate(pid) {
        
        navigate(`/updatePlayer/${pid}`);
    }

  return (
    <div className="main-container">
       <div className='tcontainer'>
          
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Matches</th>
                <th>Runs</th>
                <th>50's</th>
                <th>100's</th>
                <th>Highest</th>
                <th>SR</th>
                <th>AVG</th>
                <th>Wickets</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                 data.map((player,index)=> {
                      return <tr key={index}>
                        <td>{player.pid}</td>
                        <td>{player.playerName}</td>
                        <td>{player.matches}</td>
                        <td>{player.runs}</td>
                        <td>{player.p50s}</td>
                        <td>{player.p100s}</td>
                        <td>{player.best}</td>
                        <td>{player.sr}</td>
                        <td>{player.avg}</td>
                        <td>{player.wickets}</td>
                        <td><button onClick={()=>handleUpdate(player.pid)}>Update</button></td>
                      </tr>

                 })
              }
            </tbody>
          </table>
          <navi>
            <NavLink to='/teams'> Back</NavLink>
           
           
           </navi>
           <addbtn>
           <button className='addbtn' onClick={()=>handleAddButton(teamId)}>ADD+</button>
           </addbtn>
       </div>
    </div>
  );
}

export default TableUi;
