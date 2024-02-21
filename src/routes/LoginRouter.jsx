import React,{ useState} from 'react'
import Login from '../components/login/Login'
import Navbar from '../components/navbar/Navbar'

const LoginRouter = () => {
  const [openLogin, setLogin]= useState(false)
  return (
    <div>
      <Navbar/>

        <Login open={openLogin}/>
    </div>
  )
}

export default LoginRouter