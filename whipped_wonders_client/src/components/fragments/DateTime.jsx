import {useState, useEffect} from "react";
import FlipUnit from "../../API/clockFlipUnit";
const DateTime =() => {
 
        const [time, setTime] = useState(new Date());
        const [previousTime, setPreviousTime] = useState(new Date());
    
      useEffect(() => {
        const interval = setInterval(() => {
          setPreviousTime(time);
          setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
      }, [time]);
      
        const formatTime = (date) => {
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          const seconds = date.getSeconds().toString().padStart(2, '0');
          return { hours, minutes, seconds };
        };

        const currentFormattedTime = formatTime(time);
        const previousFormattedTime = formatTime(previousTime);
    return(
        <>
        {/* <div className=" m-3 w-full border-4 border-slate-400 p-4 bg-inherit ">

        <div className="flex justify-center items-center h-screen bg-[#FBFAF8]">
      <div className="flip-clock flex gap-2 ">
        <div className="flip-unit">
          <span className="flip-top "
          >{hours[0]}</span>
          <span className="flip-bottom "
          >{hours[0]}</span>
        </div>
        <div className="flip-unit">
          <span className="flip-top "
          >{hours[1]}</span>
          <span className="flip-bottom "
          >{hours[1]}</span>
        </div>
        <div className="flip-unit">
          <span className="flip-top "
          >{minutes[0]}</span>
          <span className="flip-bottom "
          >{minutes[0]}</span>
        </div>
        <div className=" flip-unit">
          <span className="flip-top "
          >{minutes[1]}</span>
          <span className="flip-bottom "
          >{minutes[1]}</span>
        </div>
        <div className="flip-unit">
          <span className="flip-top "
          >{seconds[0]}</span>
          <span className="flip-bottom "
          >{seconds[0]}</span>
        </div>
        <div className="flip-unit">
          <span className="flip-top "
          >{seconds[1]}</span>
          <span className="flip-bottom "
          >{seconds[1]}</span>
        </div>
      </div>
    </div>
    

        </div> */}
        <div className="flex justify-center items-center h-screen bg-[#FBFAF8]">
      <div className="flip-clock">
        {['hours', 'minutes', 'seconds'].map((unit) => (
          <div key={unit} className="flex">
            {[0, 1].map((digit) => (
              <FlipUnit
              key={digit}
              current={currentFormattedTime[unit][digit]}
              previous={previousFormattedTime[unit][digit]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
        </>
    )

}

export default DateTime;