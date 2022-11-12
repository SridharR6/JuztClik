import {Box,Button,Typography,TextField, inputClasses} from "@mui/material";
import { useState } from "react";

function Form(){
  const [isSignUp,setIsSignUp] = useState(false);
  const [input,setInput] = useState(
    {
      fname:"",
      email:"",
      pwd:"",
      mob:"",
    }
  )
  const handleChange = (e)=>{
    setInput((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(input);
  }
  const resetState = ()=>{
    setIsSignUp(!isSignUp);   
    setInput({
      fname:"",
      email:"",
      pwd:"",
      mob:"",
    });
  }
  return( 
    <>
      <form onSubmit={handleSubmit}>
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
          <Typography variant = "h2" padding = {3} textAlign = "center">{isSignUp ? "SignUp":"Login"}</Typography>
          {isSignUp &&          
              <TextField value = {input.name} name = "fname" margin = "normal" type = {'text'} variant = "outlined" onChange = {handleChange} placeholder = "Name" required/>
          }
         
          <TextField value = {input.name} name  = "email" margin = "normal" type = {'email'} variant = "outlined" placeholder = "Email" onChange = {handleChange} required/>
          
          {isSignUp &&          
                  <TextField value = {input.name} name = "mob" placeholder = "Phone Number" margin = "normal" type = {'number'} variant = "outlined" onChange = {handleChange} required/>
          }

          <TextField name  = "pwd" value = {input.name} margin = "normal" type = {'password'} variant = "outlined" placeholder = "Password" onChange = {handleChange} required/>
          {isSignUp &&          
                  <br></br>
          }
          
          <Button type = "submit" sx = {{marginTop:3, borderRadius:3}} variant = "contained" color = "secondary"> {isSignUp ? "SignUp":"Login"}</Button>
          <Button onClick = {()=>setIsSignUp(!isSignUp)} type = "reset" sx = {{marginTop:3, borderRadius:3}} variant = "outlined" color = "secondary">Change To {isSignUp ? "Login":"SignUp"}</Button>


        </Box>
      </form>
    </>
  );
}
export default Form;