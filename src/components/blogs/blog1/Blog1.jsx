import React from 'react'
import './Blog1Style.css'
import video1 from '../../../videos/gymnast-v.mp4'
import postImg1 from '../../../Images/Blog-post/18.jpg'
import postImg2 from '../../../Images/Blog-post/blog2.jpg'
import { Link } from 'react-router-dom'


const Blog1 = () => {

//     const navigate = useNavigate()

// const weddingClick=()=>{

//     navigate('/wedding')
// }

  return (
    <div name="event" className='blog1'>     
   
    <section className="container">
        <div className="videoBox"> 
        <div className="video">
        <video src={video1 } onMouseEnter={event => event.target.play()}   onMouseOut={event => event.target.pause()} type="video/mp4" className="clip" muted></video>
        </div>

            <div className="video-content">
                            <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-1bdf59f6 elementor-widget elementor-widget-pix-sliding-text" data-id="1bdf59f6" data-element_type="widget" data-widget_type="pix-sliding-text.default">
                                        <div className="elementor-widget-container">
                                            <div className="mb-3 text-left ">
                                                <h2 className="mb-32 pix-sliding-headline font-weight-bold secondary-font display-4 pix-ready" data-className="secondary-font text-heading-default" data-style=""><span className="slide-in-container"><span
                                                            className="d-inline-block secondary-font text-heading-default animated">Best
                                                            Gymnastics</span></span> <span className="slide-in-container"><span
                                                            className="d-inline-block secondary-font text-heading-default animated">academy
                                                        </span></span> <span className="slide-in-container"><span
                                                                className="d-inline-block secondary-font text-heading-default animated">for
                                                            kids </span></span> <span className="slide-in-container"><span
                                                            className="d-inline-block secondary-font text-heading-default animated">
                                                            in Delhi</span></span> <span className="slide-in-container"><span
                                                            className="d-inline-block secondary-font text-heading-default animated"></span></span>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-26bd5246 elementor-widget elementor-widget-pix-text" data-id="26bd5246" data-element_type="widget" data-widget_type="pix-text.default">
                                        <div className="elementor-widget-container">
                                            <div className="slide-in-container w-100 text-left ">
                                                <p className="text-18 text-dark-opacity-4 text-left ">we have brought up gymnastics to an extra ordinary level, where kids match there gymnastics moves on music called "rhythmic gymnastics "". Its very enjoyable activity where kids gain stamina, strength, flexibility.
                                                    we also provide platform where kids explore themselves ,, kids always show enthusiasm to learn more with innovative props. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                          
                        </div>

                        <aside className="sidebar">
                                <div className="category">
                                    <h2>Our Events</h2>
                                    { /*eslint-disable-next-line*/} 
                                    <ul className="category-list"> 
                                    <button className="btn" ><Link to='/annual'>Annual Fuction</Link></button>
                                    <button className="btn" ><Link to='/activities'> Workshop</Link></button>
                                    <button className="btn" ><Link to='/wedding'>Wedding Choreography</Link></button>
                                     </ul>
                                </div>  
                               
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
                                    </div>
                               
                            </aside>
       
   
    </section>
    
    </div>
  )
}

export default Blog1