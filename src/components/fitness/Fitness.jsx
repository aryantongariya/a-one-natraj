import React from 'react'
import './FitnessStyle.css'
import fit1 from "../../Images/fitness/banner.png"
import box1 from "../../Images/fitness/gif10.gif"
import box2 from "../../Images/fitness/gif3.gif"
import box3 from "../../Images/fitness/zumba.gif"
// import box4 from "../../Images/fitness/gif13.gif"
import box5 from "../../Images/fitness/gif4.gif"

const Fitness = () => {
  return (
    <div name="fitness" className='fitness-blog'>
        <div className="container">               
          <section id="signup">
                    <div className="signup-row">
                        <div className="signup-right-col">
                            <h1> BEING <span id="blue">BODY</span></h1>
                            <h2>BUILDER</h2>
                        </div>
                        <div className="elementor-column elementor-element-populated">
                            <div className="elementor-widget-wrap">
                                <div className="elementor-element elementor-element-1bdf59f6 elementor-widget elementor-widget-pix-sliding-text" data-id="1bdf59f6" data-element_type="widget" data-widget_type="pix-sliding-text.default">
                                    <div className="elementor-widget-container">
                                        <div className="mb-3 text-left ">
                                            <h3 className="mb-32 pix-sliding-headline font-weight-bold secondary-font display-4 pix-ready" data-className="secondary-font text-heading-default" data-style=""><span className="slide-in-container"><span
                                                        className="inline-block secondary-font text-heading-default animated">Online</span></span>
                                                <span className="slide-in-container"><span
                                                        className="inline-block secondary-font text-heading-default animated">Fitness
                                                        Classes</span></span> <span className="slide-in-container"><span
                                                        className="inline-block secondary-font text-heading-default animated">in
                                                        Delhi-NCR</span></span> <span className="slide-in-container"><span
                                                        className="d-inline-block secondary-font text-heading-default animated"></span></span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fit-img">
                       
             <div className="signup-left-col">
                     {/* // eslint-disable-next-line */}<img src={fit1} alt="" /> 
              </div>
                            
                        </div>
                </section>
                <div className="fit-box-container">
                    <div className="box"> 
                    <div className="fit-box">
                        <div className="fitness-image"><img src={box1} alt="" /></div>
                        <div className="img-content">
                        <h1>Routine <span id="blue">workout</span></h1>
                        <p>physical fitness is a state of health & well being. physically fitness is generally achieved through proper nutrition and regular workout , so if you tired in searching ""what to eat ??what all exercises are to be done ??which
                            all exercises are more effective ??/ then your search is over , and your solution is right here.you just need to follow our planner, you would not only be fit but we assure you will get rid from all the diseases if you have.
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="box">
                    <div className="fit-box">   
                        <div className="fitness-image"><img src={box2} alt="" /></div>
                        <div className="img-content">
                        <h1> Mat <span id="blue1">workout::::</span></h1>
                            <p> mat workout helps in tonning up muscles improves posture, balance and joint mobility, also give a good stretch. </p>
                            <p> Pilates can complement training by developing whole body strength and Flexibility and reduce the risk of injury. </p>
                        </div>
                    </div>
                    </div>
                    <div className="box">
                    <div className="fit-box">
                        <div className="fitness-image"><img src={box3} alt="" /></div>
                        <div className="img-content">
                        <h1>Zumba <span id="blue">workout</span></h1>
                        <p>o make workout more enjoyable, interesting and more effective we have set a planner as follows zumba,, step aerobics,, mat workout ,, circuit training,, aerobics,, weight training </p>
                        </div>
                    </div>
                    </div>
                    <div className="box">
                    <div className="fit-box">
                        <div className="fitness-image"><img src={box5} alt="" /></div>
                        <div className="img-content">
                        <h1> Step <span id="blue">Aerobics :: </span></h1>
                        <p>This is a form of aerobics exercise that involves steping on and off a small platform (steper). It is high intensity workout without putting stress on you joints. It improves overall fitness by building strength reducing fat
                                and boosting your cardio health. It also burns calories. </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    </div>
  )
}

export default Fitness

