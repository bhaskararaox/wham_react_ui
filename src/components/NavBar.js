import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from './intel-logo-white.png'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <> 
    <nav className="navbar">
        <div class="container-fluid"> 

        
            <ul style={{"padding-left": "0rem"}}>  
              <img src={logo} className="logo" height="35px" alt="logo" />        
                <NavLink
                    exact
                    to="/wham/home"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}> WHAM                               
                </NavLink> 
            </ul>     

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/wham/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick} > Home                
              </NavLink>
            </li>
           
            <li className="nav-item">
                <NavLink
                exact
                to="http://aim-pact-dev.intel.com//swagger-web/swagger-ui.html"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}  target="_blank">
                API Documentation
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/wham/sendFeedback"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick} >
                Send feedback
              </NavLink>
            </li>

             <li className="nav-item">
              <NavLink
                exact
                to="mailto:wham.support@intel.com"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick} >                
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                to="/wham/progress"
                onClick={handleClick}>                
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                to="/wham/404"
                onClick={handleClick}>                
              </NavLink>
            </li>

          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          
        </div>
      </nav>
     
    </>
  );
}

export default NavBar;
