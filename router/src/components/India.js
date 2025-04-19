import {Link, NavLink } from "react-router-dom";

function India() {
  return (
    <div>

<center><h1>Welcome to India</h1></center>
<center><img src="pic/india.jpg" ></img></center>

        <center><Link to="/up">UP</Link><br></br></center>
      <center><NavLink 
        to="/bihar"
        className={({ isActive }) => isActive ? "active" : ""}>

        Bihar
      </NavLink>
      </center>
      

    </div>
  )
};

export default India;
