import React from 'react'
import './CloudStyle.css'
import { Link } from 'react-router-dom'
import AutoPlay from '../autoPlay/AutoPlay'
// import Login from '../login/Login'
const Cloud = () => {
    // const [openLogin, setLogin]= useState(false)
    
  return (
      <div className="cloud">
       <AutoPlay/>
       
    <div className="container">
        <div className="content">
            <h2><span>A-One</span> Natraj Academy</h2>
            <p>We opened our door as Aone Natraj academy, in 2010 established by <Link to="/aryan"><span> Mr. Aryan Kumar</span></Link></p>
            <div>
                {/* <button onClick={() => setLogin(true)}><Link to='/login'> Sign Up</Link></button> */}
                <button ><Link to='/signup'> Sign Up</Link></button>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Cloud