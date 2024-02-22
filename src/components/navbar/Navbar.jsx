import React, { useState } from "react";
// import {SiDatabricks} from 'react-icons/si'
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from 'react-router-dom'
import { Link } from "react-scroll";
import logo from "../../Images/logo1.png";
import "./NavbarStyle.css";
// import Login from '../login/Login'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  // const [openLogin, setLogin]= useState(false)
  // const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  // const logout = () => {
  //   localStorage.clear();
  //   navigate('/');
  // };
  // const signupHandle=()=>{
  //   navigate('/signup')
  // }
  // const signUp=()=>{
  //     navigate('/signup')
  // }

  const homeClick=()=>{

      navigate('/')
  }
  const aboutClick=()=>{

      navigate('/about')
  }

  // const enquireClick=()=>{

  //     navigate('/enquire')
  // }
  // const loginClick=()=>{

  //     navigate('/login')
  // }

  // const handleLogout =()=>{
  //   localStorage.removeItem('token')

  // }

  return (
    <>
      <div name="top" className="navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
            {/* <h1>A One Natraj</h1> */}
          </div>

          {/* {auth ? ( */}
            <ul className={nav ? "nav-menu active" : "nav-menu"}>
              <li>
                <Link onClick={homeClick} to='/'>Home</Link>
              </li>
              <li>
              
                <Link onClick={aboutClick} to='/about'>About Us</Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="fitness"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Fitness
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="event"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="down"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
              {/* <li className="liBtn">
              <button><Link   onClick={enquireClick} to='/enquire'>
              Enquire 
                </Link></button>
              </li>

              <li className="liBtn">
              <button><Link   onClick={loginClick} to='/login'>
                  Login...  
                </Link></button>
              </li> */}
              
                {/* <button><Link className="btn"  onClick={logout} to='/signup'>
                  LogOut 
                </Link></button> */}
                {/* <h2 className="authName"> Hello, {JSON.parse(auth).name}</h2> */}
                
              
              
            </ul>
          {/* ) : ( */}
            {/* <ul className="nav-ul">
              <li>
              {" "}
                <Link className="btn" onClick={signupClick}  to='/signup'>Signup</Link>
              </li>
              <li>
                <Link className="btn" onClick={loginClick}  to='/login'>Login</Link>
              </li>
            </ul> */}
          {/* )} */}
          <div className="hamburger" onClick={handleNav}>
            {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
          </div>
        </div>
      </div>
      {/* <Login open={openLogin} onClose={()=> setLogin((false))}/> */}
    </>
  );
};

export default Navbar;
