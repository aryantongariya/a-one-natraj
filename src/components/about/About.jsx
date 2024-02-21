import React from 'react'
import './AboutStyle.css'
import img2019  from "../../Images/About/2019.JPG"
import img2018  from "../../Images/About/2018.jpg"
import img2017  from "../../Images/About/2017.jpg"
import img2016  from "../../Images/About/2016.JPG"
import img2015  from "../../Images/About/2015.JPG"
import img2014  from "../../Images/About/2014.jpg"
import img2013  from "../../Images/About/2013.JPG"
import img2012  from "../../Images/About/2012.JPG"
import img2011  from "../../Images/About/2011.JPG"
import Footer   from "../footer/Footer"

const About = () => {
  return (
    <div>
 
    <div className="about">
    <div className='container'>   
         <div className="site-title">
                    <div className="site-background">
                        <h2>About US</h2>
                        <ul>
                            <h1>A ONE NATRAJ ACADEMY</h1>
                            <p>We opened our door as Aone natraj academy, in 2010 established by Mr. Aryan Kumar. who introduced all dance style under one roof. we cater for all levels from beginners to professionals. Through our most unique astounding pattern
                                of teaching dance, kids love to learn different dance, it helps them to become a versatile dancer. We provide a professional training with good supervision to every individual, so that kids explore themselves. <br /> <br /> Our
                                honest feedback, positive encouragement and the most important parents cooperation gives students very good enthusiasm which help them to show massive improvement. </p>
                        </ul>
                    </div>
                 
                             </div>
                <div className="img-blog">
                    <ul className="box"> 
                    <div className="annual-image">
                    <img className="img" src={img2019 } alt="" />
                    </div>
                    <div className="img-content">
                        <h1>Annual Function 2019</h1>
                        <li>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at ducimus natus vitae, autem numquam sed reprehenderit. Ex, error quasi! Itaque voluptates odio porro ut nihil impedit asperiores voluptatem iusto Lorem, ipsum
                                dolor sit amet consectetur adipisicing elit. Consectetur commodi, consequuntur quos illo porro delectus similique culpa facilis, mollitia quo eveniet consequatur reiciendis obcaecati non eum vero enim nam adipisci Lorem
                                ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem nostrum dolores perspiciatis architecto. Alias, consequatur amet. Optio hic aperiam ?</p>
                        </li>
                        </div>
                    </ul>
                    <ul className="box">
                    <div className="annual-image">
                    <img className="img" src={img2018 } alt="" />
                    </div>
                    <div className="img-content">
                        <h1>Annual Functio 2018</h1>
                        <li>
                            <p>we organised annual function 2018 at Air force auditorium,Mr. Rishi raj (film director) and Mrs. Meena Malik gave there presence As our honorable chief guest, they were thrilled watching such mesmerising performances. All performances
                                were breathtaking, it was not less than an iifa award. all credit goes to aryan sir, and team. </p>
                        </li>
                        </div>
                    </ul>
                    <ul className="box"> 
                    <div className="annual-image">
                    <img className="img" src={img2017 } alt="" />
                    </div>
                    <div className="img-content">
                        <h1>Annual Functio 2017</h1>
                        <li>
                            <p>we organised 2017 annual function at Sarvapalli radha krishan auditorium. we introduced german wheel & cyr wheel.Our little kiddos with age group 4.5 also participated. parents were thrilled watching toddlers tapping there
                                feet on stage. Mr. rajeev kapur , managing director of steelbirds & Mrs sweety kapur were our honorable chief guest , they not only appreciated but thoroughly enjoyed our show. </p>
                        </li>
                        </div>
                    </ul>
                    <ul className="box"> 
                    <div className="annual-image">
                    <img className="img" src={img2016 } alt="" />
                    </div>
                    <div className="img-content">
                        <h1>Annual Function 2016</h1>
                        <li>
                            <p>we conducted our 6th at satya sai auditorium, lodhi road, kids performed dance styles. All performances were flawless.</p>
                        </li>
                        </div>
                    </ul>
                    <ul className="box">
                         <div className="annual-image">
                    <img className="img" src={img2015 } alt="" />
                    </div>
                    <div className="img-content">
                        <h1>Annual Function 2015</h1>
                        <li>
                            <p>Annual function 2015 was one of the best annual function in the past 4years. We introduced. Silk malkham, aerial hoop. All performances were astounding, Mr. Rajeev kapur managing director of steelbird and Gurchanar singh from
                                Gsk production gave there presence and highly appreciated students and teachers hard work </p>
                        </li>
                        </div>
                    </ul>
                    <ul className="box"> 
                    <div className="annual-image">
                    <img className="img" src={img2014 } alt="" />
                    </div>
                    {/* // eslint-disable-next-line */}
                    <div className="img-content">
                      <h1 >Annual Function 2014</h1>
                        <li>
                            <p>We conducted our annual function 2014 at technia auditorium in Rohini. Once again. Kids banged on with there performances. All performances were flawless.</p>
                        </li>
                        </div>
                    </ul>
                    <ul className="box">
                    <div className="annual-image">
                    <img className="img" src={img2013 } alt="" />
                    </div>
                    <div className="img-content">
                        <h1>Annual Function 2013</h1>
                        <li>
                            <p>We always try to showcase something some uniqueness in our function, we introduce UV light dance, it was treat for an eye.Honorable Chief guest was Mr. Asia , Mayank.our annual function was shown on news Channel (channel one)
                                as well.</p>
                        </li>
                        </div>
                    </ul>
                    <ul className="box"> 
                    <div className="annual-image">
                    <img className="img" src={img2012 } alt="" />
                    </div>
                    <div className="img-content">
                        <h1>Annual Function 2012</h1>
                        <li>
                            <p>we had our sec annual function was held at technia auditorium in Rohini , our honorable chief guest were Dr.Rama ,she appreciated all the performance,</p>
                        </li>
                        </div>
                    </ul>
                    <ul className="box"> 
                    <div className="annual-annual-image">
                    <img className="img" src={img2011 } alt="" />
                    </div>
                    <div className="img-content">
                        <h1>Annual Function 2011 </h1>
                        <li>
                            <p>We had our first annual function in the year 2011,held at kamani auditorium, MR.and MRS. Sehgal founder and principal of Adarsh public school gave there presence as chief guest . All performances were mesmerizing , it was wonderful
                                experience for kids as well as for parents.</p>
                        </li>
                        </div>
                    </ul>
                </div>
              
            
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About