import React from "react";
import { NavLink } from "react-router-dom";

export const Tools = () => {
return (
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
         <form>
           <div class="row" style={{"margin-bottom": "20px"}}>
               <div class="col-sm-">
                  <h3 className="h3-style">Tools - Reports:</h3>
               </div> 
          </div>
          <hr/>
            <div class="row" style={{"margin-bottom": "20px"}}>              
                <NavLink exact  to="/wham/siliconSimulationCorrelation">
                  <p className="tab" title="Silicon v/s Simulation Correlation">Silicon v/s Simulation Correlation</p>
                </NavLink>

                <NavLink exact  to="/wham/proxy">                
                  <p className="tab" title="Generate proxy">Generate proxy</p>
                </NavLink>    

                 <NavLink exact  to="/wham/query">                
                  <p className="tab" title="Custom Study List Creator">Custom Study List Creator</p>
                </NavLink>  

            </div>
          </form>                
        </div> 
      </div>
    </div>    
  </div>
</div>
  );
};
