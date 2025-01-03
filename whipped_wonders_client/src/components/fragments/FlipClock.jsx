import "../../styles/flipClock.css";
import { useEffect, useState } from "react";
import FlipClockFragment from "../fragments/FlipClockFragment";

const FlipClock = (props) =>{

  /*=========================
        Filp Mechanics
  ==========================*/ 
  //State Variables

  const [flipStates, setFlipStates]  = useState([false, false, false, false, false, false])
  const [time, setTime] = useState(new Date());
  const [previousTime, setPreviousTime] = useState(new Date());
  
  //Time formating
  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    return [hours, minutes, seconds];
  };
      
  //Run clock update
  useEffect(() => {

    const intervalId = setInterval(() => {
      const newTime = new Date();
      setPreviousTime(time);
      setTime(newTime);
      updateFlippedStates(time);  
    }, 1000);

    const timer = setTimeout(() =>{
      updateFlippedStates(time)
    }, 400)

    return () => {
      clearInterval(intervalId);
      clearTimeout(timer); 
    } // Cleanup interval on component unmount
  }, [time]); 
   
  //update flip states
  const updateFlippedStates= (time) => {
    const [hours, minutes, seconds] = formatTime(time)
    
    //updating hour-first card flipped state
    if(hours[1] + minutes + seconds == 0) {
      
      console.log("Update hourFirst");
      setFlipStates(prev => {
        const newFlipStates = [...prev]
        newFlipStates[0] = !newFlipStates[0];
        return newFlipStates;    
      })
    }

    //updating hour-last card flipped state
    if (minutes + seconds == 0) {

      console.log("Update hourLast");
      setFlipStates(prev => {
        const newFlipStates = [...prev]
        newFlipStates[1] = !newFlipStates[1];
        return newFlipStates;    
      })
      
    }

    //updating minute-first card flipped state
    if(minutes[1] + seconds == 0) {
      
      console.log("Updating minuteFirst");
      setFlipStates(prev => {
        const newFlipStates = [...prev]
        newFlipStates[2] = !newFlipStates[2]
        return newFlipStates;    
      })
            
    }

    //updating minute-last card flipped state
    if(seconds == 0){
      
      console.log("Updating minuteLast");
      setFlipStates(prev => {
        const newFlipStates = [...prev]
        newFlipStates[3] = !newFlipStates[3]
        return newFlipStates;    
      })
      
    }

    //updating second-first card flipped state
    if(seconds[1] < 1){
      
      console.log("Updating secondFirst");
      setFlipStates(prev => {
        const newFlipStates = [...prev]
        newFlipStates[4] = !newFlipStates[4]
        return newFlipStates;    
      })
    }
    //updating second-last card flipped state
    setFlipStates(prev => {
      const newFlipStates = [...prev]
      newFlipStates[5] = !newFlipStates[5]
      return newFlipStates;    
    })
  }


  const test = () => {
    //const [hours, minutes, seconds] = formatTime(time)
      //console.log("Hours: ", hours, "Minutes: ", minutes, "Seconds: ", seconds);
      console.log("State Hours: ", formatTime(time)[0], "State Minutes: ", formatTime(time)[1], "State Seconds: ", formatTime(previousTime)[2], formatTime(time)[2]);
      console.log("Previous State Hours: ", formatTime(previousTime)[0], "Previous State Minutes: ", formatTime(previousTime)[1], "Previous State Seconds: ", formatTime(previousTime)[2])
      console.log(flipStates)
  }
      
   
    return(
        <>
        <div className="">
        {/* <button className={`pr-5 border-2 border-black ${flipped? "turn-black" : " "}`} onClick={test}>Test</button> */}

          <div className="clock align-middle mobile:w-full ">

            <FlipClockFragment
            cardName ="hour-first"
            flipped = {flipStates[0]}
            currentNumberInput = {formatTime(time)[0][0]}
            previousNumberInput = {formatTime(previousTime)[0][0]}
            />
            <FlipClockFragment
            cardName = "hour-last"
            flipped = {flipStates[1]}
            currentNumberInput = {formatTime(time)[0][1]}
            previousNumberInput = {formatTime(previousTime)[0][1]}
            />

            <p className="text-6xl ">:</p>

            <FlipClockFragment
            cardName = "minute-first"
            flipped = {flipStates[2]}
            currentNumberInput = {formatTime(time)[1][0]}
            previousNumberInput = {formatTime(previousTime)[1][0]}
            />
            <FlipClockFragment
            cardName = "minute-last"
            flipped = {flipStates[3]}
            currentNumberInput = {formatTime(time)[1][1]}
            previousNumberInput = {formatTime(previousTime)[1][1]}
            />

            <p className="text-6xl text-center">:</p>

            <FlipClockFragment
            cardName= "second-first"
            flipped = {flipStates[4]}
            currentNumberInput = {formatTime(time)[2][0]}
            previousNumberInput = {formatTime(previousTime)[2][0]}
            />
            <FlipClockFragment
            cardName = "second-last" 
            flipped = {flipStates[5]} 
            currentNumberInput = {formatTime(time)[2][1]}
            previousNumberInput = {formatTime(previousTime)[2][1]}
            />

          </div>
        </div>
        </>
    )

}

export default FlipClock;