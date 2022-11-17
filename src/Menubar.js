import { Button, Container, Nav, Navbar } from "react-bootstrap";
import '@coreui/coreui/dist/css/coreui.min.css';
import { COffcanvas } from '@coreui/react';
import { COffcanvasBody } from '@coreui/react';
import { COffcanvasHeader } from '@coreui/react';
import { COffcanvasTitle } from '@coreui/react';
import { CButton } from '@coreui/react';
import { CCloseButton } from '@coreui/react';
import "./Menubar.css";
import { IoMenu } from "react-icons/io5";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Menubar(){
        const [visible, setVisible] = useState(false);
        const navigate = useNavigate();
    return(
        <>
            <Navbar bg = "dark" variant = "dark" expand = "lg" fixed="top">
                <Container>
                    <Navbar.Brand href = "#">JuztClik</Navbar.Brand>
                
                    <CButton onClick={() => setVisible(true)}><IoMenu style={{fontSize:"1.7rem",}}/></CButton>
                    <COffcanvas placement="end" style={{backgroundColor:"#222222",width:"16rem"}}  visible={visible} onHide={() => setVisible(false)}>
                      <COffcanvasHeader>
                            <COffcanvasTitle style={{color:"white"}}>Menus</COffcanvasTitle>
                            <CCloseButton style={{backgroundColor:"white"}} className="text-reset" onClick={() => setVisible(false)} />
                    </COffcanvasHeader>
                    <COffcanvasBody>
                        <div>
                            <div className="menus"><a href = "/" onClick={()=>navigate('/')}>Home</a></div>
                            <div className="menus"><a href = "/about" onClick={()=>navigate('/about')}>About Us</a></div>
                            <div className="menus"><a href = "/contact" onClick={()=>navigate('/contact')}>Contact</a></div>
                            <div className="menus"><a href = "/login" onClick={()=>navigate('/login')}>Login</a></div>
                            <div className="menus"><a href = "/signup" onClick={()=>navigate('/signup')}>SignUp</a></div>
                            <div className="menus"><a href = "/joinwithus" onClick={()=>navigate('/joinwithus')}>Join WithUs</a></div>
                            
                        </div>
                    </COffcanvasBody>
                    </COffcanvas>
                    
                </Container>
            </Navbar>
            <div>
            
            </div>
        </>
    );
}
export default Menubar;
