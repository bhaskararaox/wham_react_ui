import { NavLink } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {useRef} from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import LoadingSpinner from "./LoadingSpinner";

export const Query = () => {
  const [value, setValue] = useState('react');
  const [tabVal, setTabVal] = useState('react');
  const [tables, setTables] = useState([]);
  const [columns, setColumns] = useState([]);
  const [constraints, setConstraints] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);   

  let whamData =[]; let tableData=[]; let columnData=[]; let constraintsData=[]; let jsonData=[]; 
  

   async function getTables() { 
    try{ 
    const res = await fetch('http://aimpact-preprod.amr.corp.intel.com:3001/');
    //const res = await fetch('http://localhost:3001/');
          const json = await res.json();
          tableData = JSON.parse(JSON.stringify(json));
          setTables(tableData);
        }
        catch(err){ 
          console.log("err");
        }
      }
  
  useEffect(() => {
             getTables();
    }, [])

 const tableChange = (event) => {
  console.log("table val == ", event.target.value);
  setTabVal(event.target.value);
  //setValue(event.target.value);
    getColumns(event.target.value);
    getConstraints(event.target.value);
  };

 const getQueryData = (event) => {
   event.preventDefault(); 
  console.log("value", value);
  getData(value);
  };

   async function getColumns(selTable) { 
    try{
    var tableName = selTable;
    const res = await fetch('http://aimpact-preprod.amr.corp.intel.com:3001/table/'+tableName+'');
    //const res = await fetch('http://localhost:3001/table/'+tableName+'');
          const json = await res.json();
          columnData = JSON.parse(JSON.stringify(json));
          setColumns(columnData); 
        }
        catch(err){
          console.log("error ==", err);
        }
      }

  async function getConstraints(selTable) { 
    try{
    var tableConstraint = selTable;
    const res = await fetch('http://aimpact-preprod.amr.corp.intel.com:3001/tableConst/'+tableConstraint+'');
    //const res = await fetch('http://localhost:3001/tableConst/'+tableConstraint+'');
          const json = await res.json();
          constraintsData = JSON.parse(JSON.stringify(json));
          setConstraints(constraintsData); 
        }
        catch(err){
          console.log("error ==", err);
        }
      }

    async function getData(value) {   
        try{
              setIsLoading(true);
            let query =value;   
        const res = await fetch('http://aimpact-preprod.amr.corp.intel.com:3001/'+query+'');
    //const res = await fetch('http://localhost:3001/'+query+'');
          const json = await res.json();
          jsonData=json;
          console.log("Data Result", json);
          whamData = JSON.parse(JSON.stringify(json));
          if(whamData.length>0){
            setErrorMessage("");
            setIsLoading(false);
          }
          setCart(whamData);
          setIsLoading(false);
      }
       catch(err){
          console.log("error ==", err);
          setCart(whamData);
          setIsLoading(false);
          setErrorMessage('Something went wrong, please check/validate the query!');
        }
      } 

  
 
    const getDataIntoCSV = (e) => {
       e.preventDefault();
    }  

const tdData =() =>{   
     return cart.map((data)=>{
       return(
           <tr class="trSize_sub">
              {
                Object.keys(cart[0]).map((v)=>{
                return <td>{JSON.stringify(data[v]).replace(/\"/g, "")}</td>
                })
              }
           </tr>
          )
      })
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
                    <h3 className="h3-style"> Custom Study List Creator </h3>
                 </div> 
              </div>
              <hr/>

              <div class="row" style={{"margin-bottom": "20px"}}>
                <div class="col-sm-3">          
                    <label class="text">TABLE:</label>
                    <select class="form-select" onChange={tableChange} value={tabVal}>
                      <option value="">Select Table</option>
                       {
                        tables.map(table => {
                            return (
                              <option key={table.table_name} value={table.table_name}>{table.table_name}</option>
                            )
                        })
                      }
                    </select>
                </div> 

                <div class="col-sm-4">          
                    <label class="text">CONSTRAINTS:</label>
                    <table class="table table-bordered">
                <thead>
                  <tr class="trSize">Description</tr>                
                </thead> 
                  <tbody>
                   
                     {
                        constraints.map(constr => {
                            return (
                                <tr class="trSize_sub">
                                {constr.table_name} - {constr.constraint_name} - {constr.constraint_type}
                                
                                </tr>
                            )
                        })
                      }
                </tbody>
               </table>
                </div> 

                <div class="col-sm-4">          
                    <label class="text">COLUMNS:</label>
                    <table class="table table-bordered">
                <thead>
                  <tr class="trSize">Description (Column Name + DataType)</tr>                
                </thead> 
                  <tbody>
                   
                     {
                        columns.map(col => {
                            return (
                                <tr class="trSize_sub">
                                {col.column_name} - {col.data_type}
                                </tr>
                            )
                        })
                      }
                </tbody>
               </table>
                </div>                
              </div>

              <div class="row" style={{"margin-bottom": "10px"}}>
                  <div class= "col-sm-12">
                    <label class="text"><u>Sample Queries</u></label>
                 </div>
              </div> 

            <div class="row" style={{"margin-bottom": "20px"}}>
            {
                tabVal =='studylist' &&(              
                  <div class= "col-sm-12">
                    <label class="text">
                        1) select distinct json_array_elements(data->'tests')->>'rollup_category' as name from studylist where id='atom_client_1T_official.json';
                    </label>
                    <label class="text">
                        2) select distinct id from studylist st where exists (select * from json_array_elements(st.data->'tests') tests WHERE tests->>'rollup_category'='media');
                    </label>
                  </div>)
              }
            
              {
                tabVal =='emon' &&(              
                  <div class= "col-sm-12">
                    <label class="text">
                        1) select e_id, e_name, e_path, e_workload_id, e_data from emon where e_id > 2 ORDER BY e_id ASC;
                    </label>
                    <label class="text">
                        2) select e_id, e_name, e_path, e_workload_id from emon ORDER BY e_id ASC;
                    </label>
                  </div>)
              }

              {
                tabVal =='workload' &&(              
                  <div class= "col-sm-12">
                    <label class="text">
                        1) select * from workload where w_name='103-html5-browser_iterations-2-5' order by w_id asc;
                    </label>
                    <label class="text">
                        2) select * from workload where w_collection='geekbench-6-1' order by w_id asc;
                    </label>
                  </div>)
              }
              {
                tabVal =='trace' &&(              
                  <div class= "col-sm-12">
                    <label class="text">
                        1) select * from trace where t_name='pin_cpu2017_557-xz-r3_-_ubuntu-20-04-x64_gcc12-1-O2_-_0mlcat-pin-1s1c1t_2306_000_046;
                    </label>
                    <label class="text">
                        2) select distinct * from trace where t_id > 2;
                    </label>
                  </div>)
              }
              {
                tabVal =='simulation_stats' &&(              
                  <div class= "col-sm-12">
                    <label class="text">
                        1) select s_id, s_name, s_path, s_trace_id, s_simulator, s_data from simulation_stats where s_id >2 order by s_id asc;
                    </label>
                    <label class="text">
                        2) select distinct s_id, s_name, s_path, s_trace_id, s_simulator, s_data from simulation_stats;
                    </label>
                  </div>)
              }
              {
                tabVal =='tracesignature' &&(              
                  <div class= "col-sm-12">                    
                    <label class="text">
                        1) select distinct id, name, data from tracesignature;
                    </label>
                  </div>)
              }
              {
                tabVal =='emonsignature' &&(              
                  <div class= "col-sm-12">                    
                    <label class="text">
                        1) select distinct id, name, data from emonsignature;
                    </label>
                  </div>)
              }
            </div>                         

              <div class="row">
                <div class= "col-sm-12">
                  <label class="text">Query:</label>
                  <textarea class="form-control" onChange={event => setValue(event.target.value)} rows="5" cols="100" placeholder="Describe your query as select * from dbschema.tableName, this tool supports to execute the JOIN & Complex queries." name="queyInput" required></textarea> 
                </div>
              </div>     


              <div class="row" style={{"float": "left"}}>
                <div class= "col-sm-12 ">
                    <button type="submit" onClick={getQueryData} class="btn btn-secondary">Get Query Result</button>                    
                </div>
              </div><br/>

      <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
           <form>   
          
             
             <div class="row">
                 <div class="col-sm-">
                    <h3 className="h3-style"> Query Result</h3>
                 </div>                  
              </div> <hr/>

              {errorMessage && (
              <p className="error"> {errorMessage} </p>
              )}

              {isLoading && ( <LoadingSpinner /> )}

              <div class="row">
                 <div class="col-sm-">
                   <label class="text">
                        Number of Rows = {cart.length}
                    </label>
                 </div>                  
              </div>

{cart.length>0&& (
  
          <div class="row" style={{"height": "300px", "overflow-y": "scroll", "margin-bottom": "20px"}}>       
            <div class="col-sm-">     
                 
            <table class="table table-bordered">
                <thead>
                {cart.length>0&&
                  <tr class="trSize">
                    {Object.keys(cart[0]).map((item) => {
                      return <th class="thSize" key={item}>{item}</th>;
                    })}
                  </tr>
                }
                </thead> 

                  <tbody>                     
                    {tdData()}
                  </tbody>       
               
              </table>
            </div>
          </div>           
               
          )} 

              {cart.length>0&& (
             <div class="row">
                <div class="col-sm-">
                  <CSVLink  class="downloadFile" filename={"Custom_QueryResult.csv"} data={cart}>Export Query Result </CSVLink>       
                  
                </div>
              </div> 
              )}
            
             
             </form>                
          </div> 
        </div>
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