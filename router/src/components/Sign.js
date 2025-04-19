import './SignDesign.css';
function Sign() {
    return(
        <div className='color' >
           <h1>Fill The Details</h1>
           <input className='col' type="text" placeholder="Full Name" ></input><br></br>
           <input className='col' type="text" placeholder="Email" ></input><br></br>
           <input className='col' type="password" placeholder="Password" ></input><br></br>
           <button className='boton' > Click </button>
        </div>
    )
};
export default Sign;