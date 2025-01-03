import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./common/Header";

const Layout = () => {
    return(
        <>
        <div className="bg-beige">
            <div className="">
                <Header/>
            </div>
            
            <main>
                <Suspense fallback = {<div>Loading...</div>}>

                <Outlet/>
                
                </Suspense>
            </main>

        </div>
        </>
    )
};

export default Layout;