import NavPane from "./NavPaneMT";
import logoImg from "../../images/Whipped Wonders Logo.png"
//import DateFlipClock from "../cards/DateFlipClock"
const Header = () => {
    return(
    <>
    <header className="flex items-center m-auto justify-center max-w-screen-xl px-6 py-3 bg-beige w-[85vw] lg:w-[65vw]">
            
        <NavPane/>
           

    </header>
    </>
    );
}

export default Header;