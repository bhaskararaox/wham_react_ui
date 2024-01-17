import { NavLink } from "react-router-dom";
import React from "react";
import { useState } from 'react';
import axios from 'axios';

export const Proxy = () => {

 const [characterization_file, setCaracterization_file] = useState('');
 const [workload_log_file, setWorkload_log_file] = useState('');
 const [trace_weights_file, setTrace_weights_file] = useState('');
 const [simulation_dir, setSimulation_dir] = useState('');
 const [min_simulated_instructions, setMin_simulated_instructions] = useState('');  
  
  const handleSubmit= (event) =>{
    event.preventDefault();  

    let formData = new FormData();
    formData.append('characterization_file', characterization_file);
    formData.append('workload_log_file', workload_log_file);
    formData.append('trace_weights_file', trace_weights_file);
    formData.append('simulation_dir', simulation_dir);
    formData.append('min_simulated_instructions', min_simulated_instructions);
    formData.append('submit', 'submit');

    const config = {     
        headers: { 
        'content-type': 'multipart/form-data'}
      }

    let url = 'https://traceanalytics.intel.com/usage/submit';
    axios.post(url, formData, config)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });

    setCaracterization_file('');
    setWorkload_log_file('');
    setTrace_weights_file('');
    setSimulation_dir('');
    setMin_simulated_instructions('');
  }
 
   return (
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
           <form>     
             
             <div class="row">
                 <div class="col-sm-">
                    <h3 className="h3-style">Generate Proxy</h3>
                 </div> 
              </div>
              <hr/>

                  <div class="row" style={{"margin-bottom": "20px"}}>
                    <div class= "col-sm-12">
                    <label class="text">Profile file location:</label>
                    <input class="form-control" placeholder="profile file" value={characterization_file} name="characterization_file"  
                    onChange={(event) => { setCaracterization_file(event.target.value);}}></input>
                    </div>
                  </div>  
                  <div class="row" style={{"margin-bottom": "20px"}}>
                    <div class= "col-sm-12">
                    <label class="text">Clusters:</label>
                    <input class="form-control" placeholder="clusters" value={workload_log_file} name="workload_log_file" 
                    onChange={(event) => { setWorkload_log_file(event.target.value);}}></input>
                    </div>
                  </div>            

                  <div class="row" style={{"margin-bottom": "20px"}}>
                    <div class= "col-sm-12">
                    <label class="text">Trace Length:</label>
                    <input class="form-control" placeholder="traceLength" value={trace_weights_file} name="trace_weights_file" 
                    onChange={(event) => { setTrace_weights_file(event.target.value);}} ></input>
                    </div>
                  </div> 
          
                 

                <div class="row" style={{"float": "left"}}>
                    <div class= "col-sm-12 ">
                     <NavLink exact  to="/wham/proxyData">
                    <button type="submit" class="btn btn-secondary">Generate Proxy</button>
                    </NavLink>
                </div>
              </div>
            </form>
                  
          </div> 
        </div>
      </div>    
    </div>
  </div>
  );
};