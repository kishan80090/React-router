import { Link } from 'react-router-dom';
import './Facedesign1.css';
function Facebook1() {
  return (
    <div className="container">
      <h1 className="logo">facebook</h1>
      <h3>Create a new account</h3>
      <p>It's quick and easy</p>

      <div className="input">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Surname" />
      </div>
      
      <div className="dob-section">
        <label className='margin1' >Date of birth❓</label>
        <div className="dob-selects">
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          <select>
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>
          <select>
            <option>1990</option>
            <option>1991</option>
            <option>1992</option>
            <option>1993</option>
            <option>1994</option>
            <option>1995</option>
            <option>1996</option>
            <option>1997</option>
            <option>1998</option>
            <option>1999</option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
            <option>2003</option>
            <option>2004</option>
            <option>2005</option>
            <option>2006</option>
            <option>2007</option>
            <option>2008</option>
            <option>2009</option>
            <option>2010</option>
          </select>
        </div>
      </div>
      <div className="gender-section">
        <label className='margin1'>Gender❓</label><br/>
        <div className="gender-options">
          <label><input type="radio" name="gender" /> Female</label>
          <label><input type="radio" name="gender" /> Male</label>
          <label><input type="radio" name="gender" /> Custom</label>
        </div>
      </div>
      <div className="input-full">
        <input type="text" placeholder="Mobile number or email" />
        <input type="password" placeholder="New password" />
      </div>
      <p>People who use our service may have uploaded contact information to<br/>
      Facebook <a  href="https://www.facebook.com/help/637205020878504">Learn more</a>
      <br/>By clicking Sign Up your agree to our<a href="https://www.facebook.com/legal/terms/update">Terms</a><br/>
       <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"> Privacy Policy
       </a>and<a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">
        Cookies Policy</a>You may receive SMS notification from us and can opt at any time</p>
      <button className="signup-btn">Sign Up</button><br/><br/>

      <Link to="/login"><a > Already have an account? </a></Link>
    </div>
  );
}
export default Facebook1;
