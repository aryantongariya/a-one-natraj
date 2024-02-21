import React, { useState, useEffect } from "react";
import "./SignupStyle.css";
// import swal from "sweetalert";
import Swal from 'sweetalert2/src/sweetalert2.js'
import { Link } from "react-scroll";

import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Signup = () => {
  // const [credentials, setCredentials] = useState({
  //   age: "",
  //   activities: "",
  //   gender: "",
  //   mobile: "",
  //   email: "",
  //   password: "",
  //   name: "",
  //   cpassword: "",
  // });

  const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, setCpassword] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [activities, setActivities] = useState("");

  useEffect(() => {
    localStorage.getItem("user");
  });
  const [error, setError]=React.useState(false)

  const navigate = useNavigate();
  // const location =useLocation()

  const handleSubmit = async (e) => {
    if(!name || !email || !password || !age ||!mobile || !gender ||!activities )
    {
        setError(true)
        return false;
    }
    e.preventDefault();
    // const { name, email, password, age, mobile, gender, activities } =
    //   credentials;

    const response = await fetch("http://localhost:5005/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        age,
        mobile,
        gender,
        activities,
      }),
    });
    const json = await response.json();

    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      // localStorage.setItem("token", JSON.stringify(authtoken))
      // localStorage.setItem("user", JSON.stringify(result.result))
      localStorage.setItem("user", json.authtoken);
      navigate("/");

      // props.showAlert("Account Created Successfully", "success");
      // props.showAlert("Account Created Successfully", "success");
      Swal.fire({
        title: "success",
        text: "Account Created Successfully",

        icon: "success",
        button: "Ok",
      });
    } else {
      // props.showAlert("Invalid Credential", "danger");
      // props.showAlert("Invalid Credential", "danger");
      Swal.fire({
        title: "Oops",
        text: "Sorry a user with this email already exists",
        icon: "error",
        button: "Ok",
      });
    }
  };  

  // const onChange = (e) => {
  //   setCredentials({ ...credentials [e.target.value ] [e.target.name ]});
  // };

  // const [name, setName] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [Cpassword, setCpassword] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [mobile, setMobile] = useState("");
  //   const [age, setAge] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [activities, setActivities] = useState("");
  // const [error, setError]=React.useState(false)
  //   const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate('/admin')
  //   }
  // },[]);

  // const userData = async () => {

  //   if(!name || !email || !password || !age ||!mobile || !gender ||!activities )
  //   {
  //       setError(true)
  //       return false;
  //   }

  //   // console.warn(name, email, password);
  //   let result = await fetch("http://localhost:5005/api/auth/createuser", {
  //     method: "Post",
  //     body: JSON.stringify({ name, email, password, age, mobile, gender, activities,   }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   result = await result.json();
  //   // console.log(result);

  //   // if (name===true) {
  //   localStorage.setItem("token", JSON.stringify(result.auth))
  //     localStorage.setItem("user", JSON.stringify(result.result))
  //     navigate('/admin');
  //   //   alert("sign in is success ");
  //   // } else {
  //   //   navigate("/signup");
  //   //   alert("please feel the details");
  //   // }
  // };

  return (
    <>
      <div className="registerContainer">
        <h1>Register Form</h1>
        <div className="reg">
          <form id="reg" method="POST" action="/enquiry">
            <div className="form-control ">
              <label>Username</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // onChange={onChange}
                // name="name"
                // id="name"
                aria-describedby="emailHelp"
                minLength={2}
                placeholder="Enter  Username"
                required
              />
              { error && !name && <span className='invalid-input'>Enter valid name</span>}
            </div>
            <div className="form-control">
              <label>Email</label>
              <input
                className="input-box"
                type="email"
                placeholder="Enter Email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // name="email"
                // id="email"
                // onChange={onChange}
               
                required
              />
                <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
              { error && !email && <span className='invalid-input'>Enter valid email</span>}
            </div>
            <label>Age</label>
            {/* <select id="age" name="age" onChange={onChange} required> */}
            <select onChange={(e) => setAge(e.target.value)} required>
              <option value={age}>Select Age</option>
              <option value="4">4</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
              <option value="49">49</option>
              <option value="50">50</option>
              <option value="51">51</option>
              <option value="52">52</option>
              <option value="53">53</option>
              <option value="54">54</option>
              <option value="55">55</option>
              <option value="56">56</option>
              <option value="57">57</option>
              <option value="58">58</option>
              <option value="59">59</option>
              <option value="60">60</option>
              <option value="61">61</option>
              <option value="62">62</option>
              <option value="63">63</option>
              <option value="64">64</option>
              <option value="65">65</option>
            </select>
            { error && !age && <span className='invalid-input'>Select Age</span>}
            <label id="gender">Gender</label>
            <select
              className="gender <%=errors.gender ? 'is-invalid' : '' %>"
              
              onChange={(e) => setGender(e.target.value)}
              // onChange={onChange}
              // name="gender"
              // id="gender"
              required
            >
              <option value={gender}>Select Gender</option>
              <option value="Male">male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            {/* { error && !gender && <span className='invalid-input'>Select Gender</span>} */}
            <label>Activity</label>
            <select
              className="activities <%=errors.activities ? 'is-invalid' : '' %>"
              onChange={(e) => setActivities(e.target.value)}
              // onChange={onChange}
              // name="activities"
              // id="activities"
              required
            >
              <option value={activities}>Select Activity</option>
              <option value="Dance">Dance</option>
              <option value="Fitness">Fitness</option>
              <option value="Gymnastic">Gymnastic</option>
              <option value="Guitar">Guitar</option>
              <option value="ArtAndCraft">Art & Craft</option>
              <option value="Music">Music</option>
              <option value="MarcialArt">Martial Art</option>
            </select>
            { error && !activities && <span className='invalid-input'>Select Activity</span>}
            <div className="form-control">
              <label>Mobile Number</label>
              <input
                type="number"
                className="activities <%=errors.mobile ? 'is-invalid' : '' %>"
                // id="mobile"
                placeholder="Enter your number"
                value={mobile}  onChange={(e) => setMobile(e.target.value)} 
                // onChange={onChange}
                // name="mobile"
                minLength={10}
                maxLength={10}
                autocomplete="off"
                required
              />
              { error && !mobile && <span className='invalid-input'>Enter valid name</span>}
              <label>Password</label>
              <input
                className="input-box"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onChange={onChange}
                // name="password"
                // id="password"
                minLength={5}
                aria-describedby="passwordHelp"
                required
              />
              { error && !password && <span className='invalid-input'>Enter valid password</span>}
              <label>Confirm Password</label>
              <input
                className="input-box"
                // type="password"
                placeholder="Enter Same Password"
                value={Cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                // id="cpassword"
                aria-describedby="passwordHelp"
                minLength={5}
                required
              />
              { error && !Cpassword && <span className='invalid-input'>Enter same password</span>}
            </div>
            <Link to="top" spy={true} smooth={true} duration={200}>
              <button onClick={handleSubmit}>Submit</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
