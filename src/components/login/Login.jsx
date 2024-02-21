import React,{useState} from "react";
import "./LoginStyle.css";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { ImYoutube } from "react-icons/im";
import { useNavigate, Link } from "react-router-dom";



const Login = () => {

const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const navigate = useNavigate();

// useEffect(() => {
//   const auth = localStorage.getItem("user");
//   if (auth) {
//     navigate("/");
//   }
// },[]);

const loginHandle = async () => {
  // console.warn(name, email, password);
  let result = await fetch("http://localhost:5005/api/auth/login", {
    method: "post",
    body: JSON.stringify({  email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  result = await result.json();
  // console.log(result);

  if (result.auth) {
    localStorage.setItem("user", JSON.stringify(result.user))
    localStorage.setItem("token", JSON.stringify(result.auth))
    navigate("/");
  } else {
   
    alert("please feel the details");
  }
};

  return (
    <>
    
    <div className="login-popup">
      <div className="cont">
        <form  className="form sign-in">
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre>  */}
          <h2>Sign In</h2>
          {/* <label>
            <span>User Name</span>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </label> */}
          {/* <p>{formErrors.username}</p> */}
          <label>
            <span>Email Address</span>
            <input className='input-box' type='text' placeholder='Enter Email' 
      value={email} onChange={(e)=>setEmail(e.target.value)} 
      // name='email'
      // onChange={onChange} value={credentials.email}
      />
          </label>
          {/* <p>{formErrors.email}</p> */} 
          <label>
            <span>Password</span>
           
      <input className='input-box' type='password' placeholder='Enter Password' 
      value={password} onChange={(e)=>setPassword(e.target.value)} 
      // name="password"
      // onChange={onChange} value={credentials.password}
      />
      <button onClick={loginHandle}>Login</button>
          </label>
          {/* <p>{formErrors.password}</p> */}
          
          <p className="forgot-pass">Forgot Password ?</p>
          <Link to='/signup'><p className="sign-up"> Sign Up</p></Link>

          <div className="social-group">
            <FiInstagram className="social-icon" />
            <FiFacebook className="social-icon" />
            <FiLinkedin className="social-icon" />
            <ImYoutube className="social-icon" />
          </div>
        </form>
      </div>
    </div>
  
  </>
  )
}

export default Login


