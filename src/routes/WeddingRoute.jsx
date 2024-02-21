import './WeddingStyle.css'
import React from 'react'
import Footer from '../components/footer/Footer'

import box1 from "./image/1.jpg"
import box2 from "./image/2.JPG"
import box3 from "./image/3.JPG"
// import box4 from "../../Images/fitness/gif13.gif"
import box5 from "./image/5.JPG"

import Navbar from '../components/navbar/Navbar'

import ImageSlider from '../components/imageSlider/ImageSlider'
import { SliderData } from '../components/imageSlider/SliderData'



const WeddingRoute = () => {
  return (
    <>

    <Navbar/>
     <div className='wedingRouteContainer'> 
      <div className="content">

      <h2><span>Wedding</span> Choreography</h2>
      </div>
   <hr />
    <ImageSlider slides={SliderData}/>
<hr />
    <div className="box-container">
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
    <Footer/>
</>
  )
}

export default WeddingRoute