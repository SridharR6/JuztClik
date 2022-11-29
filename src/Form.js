import {Box,Button,Typography,TextField, inputClasses} from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Form(){
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
      <form onSubmit={()=>navigate("/")}>
        <Box display = "flex" flexDirection = {"column"} maxWidth = {400} alignItems = "center" justifyContent = {"center"}
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
          <Typography variant = "h2" padding = {3} textAlign = "center">Login</Typography>
          
          <TextField value = {input.email} name  = "email" margin = "normal" type = {'email'} variant = "outlined" placeholder = "Email" onChange = {handleChange} required/>
          
          
          <TextField name  = "pwd" value = {input.pwd} margin = "normal" type = {'password'} variant = "outlined" placeholder = "Password" onChange = {handleChange} required/>
          
          <Button onClick={()=>{
            alert("You have logged in to your account successfully.....")
            navigate("/")}} sx = {{marginTop:3, borderRadius:3}} variant = "contained" color = "secondary">Login</Button>
          <Button onClick = {()=>navigate("/signup")} sx = {{marginTop:3, borderRadius:3}} variant = "outlined" color = "secondary">Change To SignUp</Button>


        </Box>
      </form>
    </>
  );
}
export default Form;