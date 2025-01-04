import { Typography } from "@material-tailwind/react";
import Carousel from "../fragments/Carousel"
import Introduction from "../cards/Introduction";
const Home = () => {
    return(
        <div className="flex flex-col items-center justify-center p-4 sm:p-8 lg:p-16">
            <div className="">
                <Introduction/>
            </div>
            <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-12 w-[89vw]">
                <Carousel/>
                <div>
                    
                </div>

            </div>
        </div>
    )

}

export default Home;