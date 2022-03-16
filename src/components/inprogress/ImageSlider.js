import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons';

const ImageSlider =({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    if(!Array.isArray(slides) || slides.length <=0) {
        return null;
        // sixteen:twentyseven
    }
return (
    <section className='slider'>
        <FaArrowAltCircleLeft className = 'left-arrow'/>
        <FaArrowAltCircleRight className = 'right-arrow'/>
        {SliderData.map((slide,index) => {
            return <img src={slide.image} alt = 'images' className='image' />
        })}
    </section>
)
    }