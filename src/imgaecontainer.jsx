import React from 'react';
import ImageSlider from './imageslider'; // Import the ImageSlider component
import IMG1 from './assets/IMG1.jpg';
import IMG2 from './assets/IMG2.jpg';
import IMG3 from './assets/IMG3.jpg';
import IMG4 from './assets/IMG4.jpg';
//import IMG5 from './assets/IMG5.jpg';
import IMG6 from './assets/IMG6.jpg';
import IMG7 from './assets/IMG7.jpg';
import IMG8 from './assets/IMG8.jpg';
import IMG9 from './assets/IMG9.jpg';
import IMG10 from './assets/IMG10.jpg';
import IMG11 from './assets/IMG11.jpg';
import IMG12 from './assets/IMG12.jpg';
import IMG13 from './assets/IMG13.jpg';
import IMG14 from './assets/IMG14.jpg';
import IMG15 from './assets/IMG15.jpg';
import IMG16 from './assets/IMG16.jpg';
import IMG17 from './assets/IMG17.jpg';
import IMG18 from './assets/IMG18.jpg';
import IMG19 from './assets/IMG19.jpg';
import IMG20 from './assets/IMG20.jpg';
import IMG21 from './assets/IMG21.jpg';
import IMG22 from './assets/IMG22.jpg';
import IMG23 from './assets/IMG23.jpg';
import IMG24 from './assets/IMG24.jpg';
import IMG25 from './assets/IMG25.jpg';
//import IMG26 from './assets/IMG26.jpg';
import IMG27 from './assets/IMG27.jpg';
import IMG28 from './assets/IMG28.jpg';
import IMG29 from './assets/IMG29.jpg';
import IMG30 from './assets/IMG30.jpg';
import IMG31 from './assets/IMG31.jpg';
import IMG32 from './assets/IMG32.jpg';
import IMG33 from './assets/IMG33.jpg';



const ImageSliderContainer = () => {
  const imagePaths = [IMG1,IMG2,IMG3,IMG4,IMG6,IMG7,IMG8,IMG9,IMG10,IMG11,IMG12,IMG13,IMG14,IMG15,IMG16,IMG17,IMG18,IMG19,IMG20,IMG21,IMG22,IMG23,IMG24,IMG25,IMG27,IMG28,IMG29,IMG30,IMG31,IMG32,IMG33
  ]; // Replace with your image paths; // Replace with your image paths

  return (
    <div id="image-slider-container">
      <p style={{'color': 'yellow', fontFamily: 'cursive', fontSize: '30px'}}>Evolution of Danu from ages
      </p>
      <ImageSlider images={imagePaths} />
    </div>
  );
};

export default ImageSliderContainer;
