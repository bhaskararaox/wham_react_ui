import React from "react";
import { Link } from 'react-router-dom';

export const Home = () => {
return (
<div class="Container">

   <div class="row">
      <h3>Workload Heuristics Analysis Machine</h3> 
   </div>  

   <h5>For more info, please refer to our <a href="https://datamarketplace.intel.com/solutions/" target="_blank">Wiki</a> page.</h5>
   <br/>
   <div class="row">
    <div class="col-sm-3"> </div>

      <div class="col-sm-2">
         <div class="card ">
            <div class="card-body card-btn" style={{ 'background-color': 'darkgrey'}} title="goto -> Trace-Analytics">
               <a href="#" class="btn btn-link" >
                  <h5 className="card-title-color">Trace-Analytics</h5>
                  <div class="icon-discovery">
                     <img width="64" src="data:image/png;base64,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">
                     </img>                      
                  </div>
               </a>
            </div>
         </div>
      </div>
     
     <div class="col-sm-2">
         <div class="card">
            <div class="card-body card-btn" style={{ 'background-color': 'darkgrey'}} title="goto -> Workloads">                  
               <Link to='/wham/workload' class="btn btn-link">
                  <h5 class="card-title-color">Workloads</h5>
                  <div class="icon-discovery">
                     <img width="64" src="data:image/png;base64,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">
                     </img> 
                  </div>
               </Link>
            </div>
         </div>
      </div>

      <div class="col-sm-2">
         <div class="card">
            <div class="card-body card-btn" title="goto -> Tools">
               <Link to='/wham/tools' class="btn btn-link">                                         
                  <h5 class="card-title-color">Tools</h5>
                  <div class="icon-discovery">
                     <img width="64" src="data:image/png;base64,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">
                     </img> 
                  </div>
               </Link>
            </div>
         </div>
      </div>

      <div class="col-sm-3"> </div>   

    </div>
   </div>
);
};