
import { Link } from 'react-router-dom';
import './Loginstyle.css';
function LoginBook () {
    return(
<div className='size' >

    <h1 className='color'>facebook</h1><br/><br/><br/>
    
    
    <h3>Log in to Facebook</h3>
    
    <input className='input-text' type='text' placeholder='Email address or phone number' ></input>
    <br/>
    <br/>
    <input className='input-text' type='password' placeholder='Password'></input>
    <button className='bott' >Login in</button><br/>
    <div className='link' >

    < Link to="/com"> <a href="#">Forgotten account?</a></Link>
     <Link to="/facebook"> <a href="#"> Sign up for Facebook</a></Link>
    </div>
 
</div>
    )
}
export default LoginBook;