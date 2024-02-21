import React from 'react'
// import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import {FiMail, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi'
import { ImYoutube} from "react-icons/im";
// import { FaHandPointDown} from "react-icons/fa";
import './FooterStyle.css'


import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div  name='down' className="footer" >
        <div className="container">
                <div className="col-content">
                    <div className="col">
                        <h3>Our Classes</h3>
                        <p>Dance</p>
                        <p>Art & Craft</p>
                        <p>Gymnastics</p>
                        <p>Aerial Act</p>
                        <p>Wheel Act</p>
                        <p>Fitness</p>
                        <p>Music</p>
                        <p>Singing</p>
                        <p>Abacus</p>
                        <p>Chess</p>
                        <p>Acting</p>
                      
                    </div>
                   
                    <div className="col">
                        <h3>Courses</h3>
                        <p>Teaching </p>
                        <p>Dance</p>
                        <p>Art & Craft</p>
                        <p>Gymnastics</p>
                        <p>Aerial Act</p>
                        <p>Wheel Act</p>
                    </div>
                    <div className="col">
                        <h3>About Us</h3>
                        <p>About</p>
                        <p>Our Team</p>
                        <p>Founder</p>
                        <p>Work for Us</p>
                        <p></p>
                    </div>
                    <div className="col">
                        <h3>Contact</h3>
                        <p>A-5 Commercial Complax, 
                            Shankar Garden, Vikas puri, 
                            New Delhi 110018</p>
                        <br />
                         {/* eslint-disable-next-line  */}
                        <a href="#">aonenatrajacademy@gmail.com</a>
                        <p>+91- 8587906794, 
                         8766319829</p>
                    </div>
                    <form>
                        <h3>Join Our Team</h3>
                        <input type="email" placeholder='Enter Your Email'/>
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <a href="https://www.youtube.com/@bombayaryan">
                            <ImYoutube className='social-icon'/>
                            </a>
                            <a href="https://www.instagram.com/aonenatraj7?igsh=eGx1djR3NzU1bXhi&utm_source=qr">  <FiInstagram className='social-icon'/></a>
                            <a href="https://www.facebook.com/aonenatrajacademy?mibextid=JRoKGi"><FiFacebook className='social-icon'/></a>
                            <a href="https://www.youtube.com/@bombayaryan"> <FiLinkedin className='social-icon'/></a> 
                           
                        </div>
                    </form>
                    <div className="top">
                <Link activeClass='active' to='top' spy={true} smooth={true} duration={500}>
                    <BsFillArrowUpCircleFill className='icon' />
                </Link>
                </div>
                </div>
            
        </div>
    </div>
  )
}

export default Footer