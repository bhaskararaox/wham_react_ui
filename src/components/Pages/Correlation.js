import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";


export const Correlation = () => {
  const location = useLocation();
  const { state } = location; 
  let srcUrl='';

  if(state.from.indexOf("simics_geekbench-6-1_101-file-compression") >1){   
    srcUrl="https://aim-pact-dev.intel.com/compCorrelation/";
  }
  if(state.from.indexOf("simics_geekbench-6-1_102-navigation") >1){   
    srcUrl="https://aim-pact-dev.intel.com/navCorrelation/";
  }
  if(state.from.indexOf("simics_spec_502-gcc-r_64bit") >1){   
    srcUrl="https://aim-pact-dev.intel.com/gccCorrelation/";
  }
  if(state.from.indexOf("simics_spec_500-perlbench-r_64bit") >1){   
    srcUrl="https://aim-pact-dev.intel.com/perlCorrelation/";
  }

  return (
  <div class="container">
    <div class="row">
     <div class="col-sm-">
        <div class="card">
          <div class="card-body">
           <form>
              <iframe src={srcUrl} width="1275" height="600"></iframe>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};