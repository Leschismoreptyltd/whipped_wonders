import { useState } from "react";
const DateFragment = (props) => {

    const [date, setDate] = useState(new Date());

    const formatDate = () => {
        const date = new Date();

        const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
    
        return formattedDate;
    }
    return(
        <>
        <div className="font-bebasNeue text-5xl mobile:w-full">
           {formatDate()}
        </div>
        </>
    )

}

export default DateFragment