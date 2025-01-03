import React, { useEffect, useState } from 'react';
import "../styles/flipClock.css"

const FlipUnit = ({ current, previous }) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = document.querySelector(".flip-clock-container")

  useEffect(() => {
    if (current !== previous) {
      setFlipped(true);
      const timeout = setTimeout(() => setFlipped(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [current, previous]);

  const topAnimationStart =() => {
    console.log(flipCard);
    const topFlip = flipCard.querySelector(".top-flip")
    console.log(topFlip);
    //topFlip.textContent = 0
  }

  const topAnimationEnd =() => {
    const topFlip = flipCard.querySelector(".top-flip")
    topFlip.remove;

  }

  const bottomAnimationEnd =() => {
    const bottomFlip = flipCard.querySelector(".bottom-flip")
    //bottomFlip.textContent = 0
    bottomFlip.remove
  }

  return (
    <div className="flip-clock-card">
        <div className="top">{current}</div>
        <div className="bottom">{current}</div>
        {flipped ?(
                <> 
                    <div className="top-flip" >{current}</div> 
                    <div className="bottom-flip">{current}</div> 
                </>) 
                :(<div></div>) }
      
    </div>
  );
};

export default FlipUnit;