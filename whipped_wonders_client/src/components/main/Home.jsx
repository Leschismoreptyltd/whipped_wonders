import { Typography } from "@material-tailwind/react";
import Carousel from "../fragments/Carousel"
const Home = () => {
    return(
        <div className="flex items-center justify-center p-4 sm:p-8 lg:p-16">
            <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-12 w-[89vw]">
                <Carousel/>
                <div>
                    
                </div>
                Special Occations

            </div>
        </div>
    )

}

export default Home;