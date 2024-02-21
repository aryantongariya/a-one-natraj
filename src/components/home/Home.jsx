import React from 'react'
import Blog1 from '../blogs/blog1/Blog1'
import Blog2 from '../blogs/blog2/Blog2'
import Cloud from '../cloud/Cloud'
import Fitness from '../fitness/Fitness'
import Footer from '../footer/Footer'

import style from '../../App.module.css'
import ActivitiBlog from '../blogs/activitiBlog/ActivitiBlog'

const Home = () => {
  return (
    <>
    <div>
        
    {/* <AutoPlay /> */}
    <Cloud />
    <div className={style.mainContainer}>  
    <Blog1/>
    <hr />
    <ActivitiBlog/>
    <hr />
    <Fitness/>
    <hr />
   <Blog2/>
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default Home