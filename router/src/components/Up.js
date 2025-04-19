import { Link,NavLink } from "react-router-dom";
function Up()
{
    return(
        <div>
        
            <center><h1>Welcome to up</h1></center>

            <center><img src="pic/up.jpg"></img></center>

            <center><Link to="/" >India</Link></center>
            
            <center><Link to="/varanasi">varanasi</Link></center>
            
        </div>
    )
};
export default Up;
