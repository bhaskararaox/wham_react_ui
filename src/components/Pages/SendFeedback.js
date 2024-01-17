import React from "react";

export const SendFeedback = () => {
const showAlert = () => {
    alert("I'm an alert");
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
                  <h3 className="h3-style">Report work request: Feedback</h3>
               </div> 
            </div>
            
            <hr/>

            <div class="row" style={{"margin-bottom": "20px"}}>
              <div class="col-sm-2">          
                  <label class="text">TYPE:</label>
                  <select class="form-select" name="type">
                    <option value="Feedback">Feedback</option>
                    <option value="Issue">Issue</option>
                    <option value="Question">Question</option>
                  </select>
              </div> 
              <div class= "col-sm-10">
                <label class="text">SHORT DESCRIPTION:</label>
                <input class="form-control" name="shortdescription"></input>
              </div>
          </div> 

            <div class="row" style={{"margin-bottom": "20px"}}>
              <div class= "col-sm-12">
                <label class="text">DESCRIPTION:</label>
                <textarea class="form-control" rows="8" placeholder="Describe your issue or share your ideas" name="description" required></textarea>
              </div>
            </div> 

            <div class="row">
              <div class="col-sm-12">          
                  <label class="text">PRIORITY:</label>
                  <select class="form-select" name="type">
                    <option value="Low">Low business impact/urgency</option>
                    <option value="Medium">Medium business impact/urgency</option>
                    <option value="High">High business impact/urgency</option>
                  </select>
              </div> 
            </div>

              <div class="row" style={{"float": "left"}}>
                  <div class= "col-sm-12 ">
                  <button type="submit" class="btn btn-secondary" onClick={showAlert}>Submit</button>
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
