import Menubar from "./Menubar";
import Cards from "./Cards";
import { IoLogoClosedCaptioning } from "react-icons/io5";
import { speedDialIconClasses } from "@mui/material";
import Footer from "./Footer";
import zIndex from "@mui/material/styles/zIndex";
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
                <center>
                <br></br><br></br><br></br><h1 style = {{color:"blueviolet", position:"sticky", zIndex:"1",margin:"0.5px",fontFamily:"Times New Roman",fontWeight:"bolder"}}>WELCOME😎</h1>
                </center>
            <Cards/>
            <Footer/>
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
