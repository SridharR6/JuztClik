import {Box,Button,Typography,TextField, inputClasses} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signupform(){
  const navigate = useNavigate();
  const [input,setInput] = useState(
    {
      fname:"",
      email:"",
      pwd:"",
      mob:"",
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
          <Typography variant = "h2" padding = {3} textAlign = "center">SignUp</Typography>
          
          <TextField value = {input.fname} name  = "fname" margin = "normal" type = {'text'} variant = "outlined" placeholder = "Name" onChange = {handleChange} required/>
          
          <TextField value = {input.email} name  = "email" margin = "normal" type = {'email'} variant = "outlined" placeholder = "Email" onChange = {handleChange} required/>
          
          <TextField value = {input.mob} name  = "mob" margin = "normal" type = {'number'} variant = "outlined" placeholder = "Mobile" onChange = {handleChange} required/>
                    
          <TextField name  = "pwd" value = {input.pwd} margin = "normal" type = {'password'} variant = "outlined" placeholder = "Password" onChange = {handleChange} required/>


          <Button onClick={()=>navigate("/")} sx = {{marginTop:3, borderRadius:3}} variant = "contained" color = "secondary">SignUp</Button>
          <Button onClick = {()=>navigate("/login")} sx = {{marginTop:3, borderRadius:3}} variant = "outlined" color = "secondary">Change To Login</Button>


        </Box>
      </form>
    </>
  );
}
export default Signupform;