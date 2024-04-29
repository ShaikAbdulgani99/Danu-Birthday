import React, { useState, useEffect, useRef } from 'react';
import Sound from './assets/Dhanu.mp3'; // Assuming correct import path
import './styles.css'; // Import your CSS file
import ImageContiner from './imgaecontainer'; // Import the ImageSlider component

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null); // useRef for audio element

  const playAudio = () => {
    if (!audioRef.current) {
      // Create a new audio element only on the first click
      audioRef.current = new Audio(Sound);
    }
    audioRef.current.play(); // Play audio

    setIsOpen(true); // Show message
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause audio
      audioRef.current.currentTime = 0; // Reset audio position
    }
    setIsOpen(false); // Hide message
  };

  

  return (
    <div id="envelope" onClick={isOpen ? stopAudio : playAudio}>
      {/* Rest of your envelope elements */}
      <div id="flap" className={isOpen ? 'open' : ''}></div>
      <div id="message-container">
        <p id="message" className={isOpen ? 'show-message' : ''} style={{fontFamily:'cursive', fontSize: '30px'}}>
          Happy Birthday Danish!
        </p>
      </div>
     
     
      
    </div>
    
    
    
   
  );
};

export default Envelope;
