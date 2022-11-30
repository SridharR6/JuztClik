import Menubar from "./Menubar";
import {Box,Button,TextField} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import { Row,Col} from "react-bootstrap";

function Query(){

    const navigate = useNavigate();
  const [input,setInput] = useState(
    {
      email:"",
      pwd:"",
      
    }
  )
  function handleChange(event){
   
    const {name,value} = event.target;
    setInput(prevInput =>{
      return{
        ...prevInput,
        [name]:value
      }
    })
  }

    return(
        <>
            <Menubar/>
            <br></br>
            <br></br>
            <br></br>
            
            <form onSubmit={()=>navigate("/")}>
        <Box display = "flex" flexDirection = {"column"} maxWidth = "80%" alignItems = "center" justifyContent = {"center"}
        margin = "auto"
        marginTop = {5}
        padding = {3}
        borderRadius = {5}
        boxShadow = {"5px 5px 10px #111"}
        sx = {{
          ":hover":{
            boxShadow :'10px 10px 20px #ccc'
          }
        }}
        >
          <h1 style = {{textAlign:"center", position:"sticky", zIndex:"1",margin:"0.5px",fontFamily:"Times New Roman",fontWeight:"bolder"}}>Complaint Registration</h1>
          
          <center>
          <form>
            <Row className = "row">
                
                <Col md = {6} xs = {12}>
                <TextField placeholder = "Enter your Name:" margin = "normal" /> <br></br>
                <TextField placeholder = "Enter mail id:" margin = "normal"/><br></br>
                </Col>

                <Col md = {6} xs = {12}>
                
                <TextField placeholder = "Enter mobile number:" margin = "normal"/><br></br>
                <TextField placeholder = "Location in detail:" margin = "normal"/><br></br>
                </Col>

                <Col xs = {12}>
                <TextField fullWidth multiline rows={3} variant = "filled" placeholder = "Type your complaints here..." margin = "normal"/><br></br>
                </Col>
                <Col>
                <Button onClick={()=>{
                    alert("your complaint has been registered, we will revert you soon....")
                    navigate("/")}} sx = {{marginTop:3, borderRadius:3}} variant = "contained" color = "secondary">Submit</Button>
                </Col>
                
            </Row>
            </form>
            </center>   


        </Box>
      </form>

        </>
    )
}
export default Query;