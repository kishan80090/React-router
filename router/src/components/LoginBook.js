
import { Link } from 'react-router-dom';
import './Loginstyle.css';
function LoginBook () {
    return(
<div >
    <h1 className='color'>facebook</h1>
    
    
    <h3>Log in to Facebook</h3>
    
    <input className='input-text' type='text' placeholder='Email address or phone number' ></input>
    <br/>
    <br/>
    <input className='input-text' type='password' placeholder='Password'></input>
    <br/>
    <br/>
    <button className='botton' >Login in</button><br/><br/>

    <a href="#">Forgotten account?</a> <Link to="/facebook"> <a href="#"> Sign up for Facebook</a></Link>
 
</div>
    )
}
export default LoginBook;