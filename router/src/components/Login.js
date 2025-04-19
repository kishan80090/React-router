
import './Logindesign.css';
function Login () {
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
    <button className='botton' >Login in</button>
    <h5><a href="#">Forgotten account? Sign up for Facebook</a></h5>
    
 
</div>
    )
}
export default Login;