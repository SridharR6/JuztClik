import {Box,Button,Typography,TextField, inputClasses} from "@mui/material";
import { useState } from "react";
import axios from "axios";

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
  function handleChange(event){
    const {name,value} = event.target;
    setInput(prevInput =>{
      return{
        ...prevInput,
        [name]:value
      }
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();

    const newUser = {
      fname:input.fname,
      email:input.email,
      pwd:input.pwd,
      mob:input.mob
    }

    axios.post("http://localhost:3001/userlogin",newUser);
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
              <TextField value = {input.fname} name = "fname" margin = "normal" type = {'text'} variant = "outlined" onChange = {handleChange} placeholder = "Name" required/>
          }
         
          <TextField value = {input.email} name  = "email" margin = "normal" type = {'email'} variant = "outlined" placeholder = "Email" onChange = {handleChange} required/>
          
          {isSignUp &&          
                  <TextField value = {input.mob} name = "mob" placeholder = "Phone Number" margin = "normal" type = {'number'} variant = "outlined" onChange = {handleChange} required/>
          }

          <TextField name  = "pwd" value = {input.pwd} margin = "normal" type = {'password'} variant = "outlined" placeholder = "Password" onChange = {handleChange} required/>
          {isSignUp &&          
                  <br></br>
          }
          
          <Button onClick={handleSubmit} sx = {{marginTop:3, borderRadius:3}} variant = "contained" color = "secondary"> {isSignUp ? "SignUp":"Login"}</Button>
          <Button onClick = {resetState} sx = {{marginTop:3, borderRadius:3}} variant = "outlined" color = "secondary">Change To {isSignUp ? "Login":"SignUp"}</Button>


        </Box>
      </form>
    </>
  );
}
export default Form;