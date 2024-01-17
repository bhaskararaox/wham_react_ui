import React, {useState, useEffect} from 'react';
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import Plot from 'react-plotly.js';
//import fs from 'fs';

export const Workload = () => {

let srcUrl ;
  useEffect(() => {
    console.log("props == ", localStorage.getItem('clickedVar'));
  if(localStorage.getItem('clickedVar') === '101-file-compression'){
      srcUrl="https://aim-pact-dev.intel.com/fileCompression/";
   }
  }, []);

  console.log("srcUrl", srcUrl);
  
  return (
     <div className="main">             
        <hr className='text-white text-decoration-none d-sm-block'></hr> 
          <Sidebar />  

           <div className="container">
           <div class="row">
             <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                   <form>
                      <iframe src="https://aim-pact-dev.intel.com/fileCompression/" width="1275" height="600"></iframe>
                   </form>
                  </div>
                </div>
              </div>
            </div>
          </div> 

      </div>
    );
};
