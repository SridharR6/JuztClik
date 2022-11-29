import Menubar from "./Menubar";
import {Box,Button,Typography,TextField, inputClasses} from "@mui/material";
import { Row,Col} from "react-bootstrap";
import "./Contact.css";
import Brandlogo from "./contactus.gif";
import { useNavigate } from "react-router-dom";
function Contact(){
    const navigate = useNavigate();
    return(
        <>
        <Menubar/>
        <br></br><br></br><br></br>
        <Box display = "flex" flexDirection={"column"} alignItems = "center" justifyContent={"center"} borderRadius = {5} boxShadow = {"5px 5px 16px #000066"} marginTop = {3} marginRight = {4} marginLeft = {4}>
        <Typography variant = "h3" paddingTop = {1} textAlign = "center">Contact Us</Typography>
          <Row>
          <img className="brand" src = {Brandlogo}></img>
          </Row>
          <center>
          <form>
            <Row className = "row">
                
                <Col md = {6} xs = {12}>
                <TextField placeholder = "Enter your Name" margin = "normal" /> <br></br>
                <TextField placeholder = "Enter your Age" margin = "normal"/><br></br>
                <TextField variant = "outlined" placeholder = "Enter your email id" margin = "normal"/><br></br>
                </Col>

                <Col md = {6} xs = {12}>
                
                <TextField placeholder = "Enter your password" margin = "normal"/><br></br>
                <TextField placeholder = "write your query" margin = "normal"/><br></br>
                <TextField placeholder = "help us to develop" margin = "normal"/><br></br>
                </Col>
                <Col>
                <Button onClick={()=>{
                    alert("your query has been submitted successfully....")
                    navigate("/")}} sx = {{marginTop:3, borderRadius:3}} variant = "contained" color = "secondary">Submit</Button>
                </Col>
                
            </Row>
            </form>
            </center>   
        </Box>        
        <br></br><br></br>
        </>
    );
}
export default Contact;