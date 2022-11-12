import {Box,Button,Typography,TextField} from "@mui/material";
import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function Login(){
  const [isSignUp,setIsSignUp] = useState(false);
  const [value, setValue] = useState();
  return( 
    <>
      <form>
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
          {isSignUp &&          
              <TextField margin = "normal" type = {'name'} variant = "outlined" placeholder = "Name"/>
          }
         
          <TextField margin = "normal" type = {'email'} variant = "outlined" placeholder = "Email"/>
          <TextField margin = "normal" type = {'password'} variant = "outlined" placeholder = "Password"/>

          {isSignUp &&          
                  <PhoneInput placeholder = "Phone Number" onChange={setValue}/>
          }
          
          <Button sx = {{marginTop:3, borderRadius:3}} variant = "contained" color = "secondary"> {isSignUp ? "SignUp":"Login"}</Button>
          <Button onClick = {()=>setIsSignUp(!isSignUp)} sx = {{marginTop:3, borderRadius:3}} variant = "outlined" color = "secondary">Change To {isSignUp ? "Login":"SignUp"}</Button>

        </Box>
      </form>
    </>
  );
}
export default Login;