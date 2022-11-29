import Menubar from "./Menubar";
import Cards from "./Cards";
import { IoLogoClosedCaptioning } from "react-icons/io5";
import { speedDialIconClasses } from "@mui/material";
function Home(){
    return (
        <>
            <Menubar/>
            <br></br>
            <div style={
                {
                    backgroundColor:"white",
                }
            }>
            <Cards/>
            </div>
        </>
    );
}
export default Home; 

// electrician
// plumber
// carpenter
// mechanic
// gardener
// house cleaning 
// home saloon 
// laundry services 
// physiotheraphist
