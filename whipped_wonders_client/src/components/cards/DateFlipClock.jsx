import FlipClock from "../fragments/FlipClock";
import DateFragment from "../fragments/DateFragment";
const DateFlipClock = () =>{

    return(
        <>
            <div className="flex flex-col gap-1 m-3 border-4 border-gray-300 p-4 mobile:w-full mobile:p-2" >

                <DateFragment/>
                <FlipClock/>

            </div>  

        </>
    )
}

export default DateFlipClock;