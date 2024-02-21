import "./ArtCraftLibraryModal.css"
import React, {useState} from 'react'
import { ArtCraftImages } from './ArtCraftImages'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
// import {CgCloseO} from 'react-icons/cg';

const ArtCraftLibrary = ({  slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
  
    const nextSlide = ()=>{
      setCurrent(current === length - 1 ? 0: current + 1)
    }
    const prevSlide = ()=>{
      setCurrent(current === 0 ? length - 1 : current - 1)
    }
  


  return (
    <> 
    <section className='slider'>
     {/* <CgCloseO className="closs"  onClick={onClose} /> */}
   
    <FaArrowAltCircleLeft className='left-arrow'onClick={prevSlide}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    {ArtCraftImages.map((slide, index)=>{
      return (
        <div className={index === current ? 'slide active' : 'slide'}
        key={index}>

          {index === current && ( // eslint-disable-next-line
            <img src={slide.image} alt="new image" className='image' />
          )}

        </div>
      )
       
    })}
   </section>
   </>
  )
}

export default ArtCraftLibrary