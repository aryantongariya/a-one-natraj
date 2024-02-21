import React from 'react'
import './ActivitiBlogStyle.css'

import postImg1 from '../../../Images/Blog-post/Activity/art&craft.png'
import postImg2 from '../../../Images/Blog-post/Activity/wheel.png'
import postImg3 from '../../../Images/Blog-post/Activity/acting2.png'
import postImg4 from '../../../Images/Blog-post/Activity/classical.png'
import postImg5 from '../../../Images/Blog-post/Activity/gymnast.png'
import postImg6 from '../../../Images/Blog-post/Activity/aerial.png'
// import postImg2 from '../../../Images/Blog-post/hoop.jpg'
import { Link } from 'react-router-dom'


const ActivitiBlog = () => {

//     const navigate = useNavigate()

// const weddingClick=()=>{

//     navigate('/wedding')
// }

  return (
    <div name="event" className='blog1'>     
   
    <section className="container">
        <div className="activities">

                                <h2>Our Activities</h2>
        </div>
        <div className="sidebar"> 
      
                                <div className="post-content">
                                        <div className="post-image">
                                            <div> 
                                                <img className='post-img' src={postImg1} alt="" />
                                            </div>
                                        </div>
                                        <div className="post-image">
                                            <div> 
                                            <img className='post-img' src={postImg2} alt="" />
                                            </div>
                                        </div>
                                        <div className="post-image">
                                            <div> 
                                            <img className='post-img' src={postImg3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                          
                        </div>
    
                        <aside className="sidebar">
                                <div className="category">
                                    
                                    { /*eslint-disable-next-line*/} 
                                    <ul className="category-list"> 
                                    <button className="btn" ><Link to='/danceclasses'>Dance Class</Link></button>
                                    <button className="btn" ><Link to='/gymnastics'>Gymnastics Class</Link></button>
                                    <button className="btn" ><Link to='/activities'>Acting & Modeling</Link></button>
                                    <button className="btn" ><Link to='/artcraft'> ArtCraft & Drawing</Link></button>
                                     </ul>
                                </div>
                               
                                    <div className="post-content">
                                        <div className="post-image">
                                            <div> 
                                                <img className='post-img' src={postImg4} alt="" />
                                            </div>
                                        </div>
                                        <div className="post-image">    
                                            <div> 
                                            <img className='post-img' src={postImg5} alt="" />
                                            </div>
                                        </div>
                                        <div className="post-image">
                                            <div> 
                                            <img className='post-img' src={postImg6} alt="" />
                                            </div>
                                        </div>
                                    </div>
                               
                            </aside>
       
   
    </section>
    
    </div>
  )
}

export default ActivitiBlog