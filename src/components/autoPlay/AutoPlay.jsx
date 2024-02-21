import React, { Component } from "react";
import style from './AutoPlayStyle.module.css'
import Slider from "react-slick";

import img1 from "../../Images/Blog-post/acro.jpg"
import img2 from "../../Images/Blog-post/bharat.jpg"
import img3 from "../../Images/Blog-post/german-wheel.jpg"
import img4 from "../../Images/Blog-post/contemporary.jpg"
import img5 from "../../Images/Blog-post/couple-dance.jpg"
import img6 from "../../Images/Blog-post/cube.jpg"
import img7 from "../../Images/Blog-post/cyr-wheel.jpg"
import img8 from "../../Images/Blog-post/flexi.jpg"
import img9 from "../../Images/Blog-post/hip-hop.jpg"
import img10 from "../../Images/Blog-post/jazz.jpg"
import img11 from "../../Images/Blog-post/pole.jpg"
import img12 from "../../Images/Blog-post/silk.jpg"
import img13 from "../../Images/Blog-post/hoop.jpg"



export default class AutoPlay extends Component {
  render() {
    const settings = {
      // dots: true,
      // infinite: true,
      slidesToShow: 9,
      // slidesToScroll: 2,
      centerMode: true,
      autoplay: true,
      speed: 3000,
      // autoplaySpeed: 1000,
      cssEase: "linear",
      responsive:[
        {
          breakpoint:940,
          settings: {
            slidesToShow: 5,
            centerMode:false,
          }
        },
        {
          breakpoint:520,
          settings: {
            slidesToShow: 3,
            centerMode:false,
          }
        },
        {
          breakpoint:520,
          settings: {
            slidesToShow: 3,
            centerMode:false,
          }
        },
        {
          breakpoint:440,
          settings: {
            slidesToShow: 2,
            centerMode:false,
          }
        },
        {
          breakpoint:300,
          settings: {
            slidesToShow: 1,
            centerMode:false,
          }
        },
      ]
    };
    return (
      <div className={style.autoplay}>
        
        <Slider {...settings}>
          <div>
            <img className={style.image}  src={img1} alt="acro" />
          </div>
          <div>
          <img   className={style.image}  src={img2} alt="bharatnatyam" />
          </div>
          <div>
          <img   className={style.image}  src={img3} alt="german wheel" />
          </div>
          <div>
          <img   className={style.image}  src={img4} alt="contemporary" />
          </div>
          <div>
          <img   className={style.image}  src={img5} alt="salsa dance" />
          </div>
          <div>
          <img   className={style.image}  src={img6} alt="cube act" />
          </div>
          <div>
          <img   className={style.image}  src={img7} alt="cyr wheel" />
          </div>
          <div>
          <img   className={style.image}  src={img8} alt="flexi" />
          </div>
          <div>
          <img  className={style.image}   src={img9} alt="hip hop" />
          </div>
          <div>
          <img   className={style.image}  src={img10} alt="jazz" />
          </div>
          <div>
          <img   className={style.image}  src={img11} alt="pole" />
          </div>
          <div>
          <img   className={style.image}  src={img12} alt="aerial silk" />
          </div>
         
          <div>
          <img   className={style.image}  src={img13} alt="aerial hoop" />
          </div>
         
        </Slider>
      </div>
    );
  }
}