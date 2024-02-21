import React from 'react'
import video1 from '../../../videos/kids-v.mp4'
import './Blog2Style.css'
import { Link } from 'react-router-dom'

const Blog2 = () => {
  return (
    <div className="blog2">

   
    <section className="container-2">

         <div className="videoBox2"> 
         <div className="video">
        <video src={video1 } onMouseEnter={event => event.target.play()}   onMouseOut={event => event.target.pause()} type="video/mp4" className="clip" muted></video>
        </div>
         <div className="video-content">
                            <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-1bdf59f6 elementor-widget elementor-widget-pix-sliding-text" data-id="1bdf59f6" data-element_type="widget" data-widget_type="pix-sliding-text.default">
                                        <div className="elementor-widget-container">
                                            <div className="mb-3 text-left ">
       
                                                <h3 className="mb-32 pix-sliding-headline font-weight-bold secondary-font display-4 pix-ready" data-className="secondary-font text-heading-default" data-style=""><span className="slide-in-container"><span
                                                            className="d-inline-block secondary-font text-heading-default animated">Best
                                                            online</span></span> <span className="slide-in-container"><span
                                                            className="d-inline-block secondary-font text-heading-default animated">dance
                                                            classes </span></span> <span className="slide-in-container"><span
                                                            className="d-inline-block secondary-font text-heading-default animated">
                                                            in Delhi</span></span> <span className="slide-in-container"><span
                                                            className="d-inline-block secondary-font text-heading-default animated"></span></span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-26bd5246 elementor-widget elementor-widget-pix-text" data-id="26bd5246" data-element_type="widget" data-widget_type="pix-text.default">
                                        <div className="elementor-widget-container">
                                            <div className="slide-in-container w-100 text-left ">
                                                <p className="text-18 text-dark-opacity-4 text-left ">we have been teaching all types of dance form since 2010. As you can see in above video , we put our best to teach all various type of dance style to make kids versatile dancer, and to upbring there hidden
                                                    talent, we provide best platform so that they can explore. "" flawless, immaculated performances, we bet to have better academy than this".
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <aside className="online-blog">     
              <div className="post-content-2" >
                      <h1>Enormous advantages of online classes</h1>
                      <div className="blog-container">
                        <ul>    
                            <h2> online classes</h2>
                            <li>1. It help to improve child's self discipline.</li>
                            <li>2. It increase focus.</li>
                            <li>3. Child become self independent.</li>
                            <li>4. The biggest advantage of online classes, your child is safe & get more comfortable environment.</li>
                            <li>5. Parents can also monitor there kids performance.</li>
                            <li>6. Students gets individual attention in minimum batch.</li>
                            <li>7. Online classes enhance technical skills of the child.</li>
                            <li>8. There is complete transparency between parents and teacher, they can discuss, parents easily get feedback of child's performance.</li>
                            <li>9. Parents get financial benefits, by not spending on parking,petrol etc.</li>
                            <li>10. Parents also safe there travelling time.</li>
                        </ul>
                      </div>      

                      <ul className="category-list">
                        <button className="btn" ><Link to='/activitis'> Are Activitis</Link></button>
                        <button className="btn" ><Link to='/activitis'> Are Activitis</Link></button>  </ul>                   
                         </div>                           
        </aside>
    </section>
    </div>
    
  )
}

export default Blog2