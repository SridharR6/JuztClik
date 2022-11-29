import React from 'react';
import useCollapse from 'react-collapsed';
import { Row ,Col, Card , Button,Image, Container} from 'react-bootstrap';
import './About.css';
import click from "./click.png";
import Menubar from './Menubar';
import plumber from "./plumber.png";
import electrician from "./electrician.png";
import homesaloon from "./homesaloon.png";
import { useNavigate } from 'react-router-dom';

function About() {
    const config = {
        duration: 1000
    };
    const navigate = useNavigate();
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
return (
    <div>
        <Menubar/>
        <br></br><br></br>
        <div className='container'>
            <Row className='front'>
                <Col md={5} xs={12} >
                    <center>
                    <Image className='image' src={click}></Image>
                    </center>
                </Col>
                <Col md = {1} xs = {12}></Col>
                <Col md={6} xs={12}>
                    <div className='para'>JuztClick was started in 2022 by five graduates. Our main aim is to satisfy the user's needs by providing them valuable services based on their requirements. We are very happy and interested in helping people and making them happy. This website was developed by 5 graduates and their information was also included below. We are providing a variety of services based on the consumers. We are supplying:<span style={{color:'darkblue' ,fontFamily:'monospace', fontSize:'90%'}}> Electricians, Plumbers, Mechanics, Carpenters, House cleaning services, Gardener, Home physiotherapy, Home saloon, laundry services.</span></div>
                </Col>
            </Row>
        </div>
        <br></br>
        <Container>
            <Row>
<Col xs = {12}>
        <Card>
            <div className="collapsible">
                <div className="header" {...getToggleProps()}>
                    <div className='head' style={{color:'black'}}> Click To View Entier Works We Offer About </div>
                </div>
                <div {...getCollapseProps()} >
                    <div className="content">
                        <div className='card1'>
                            <Row>
                                <Col md = {4}>
                                    <Card style={{ width: '18rem',backgroundColor:'black',justifyContent:'center', alignItems:'center'}}>
                                    <Card.Img variant="top" src={plumber} />
                                    <Card.Body>
                                        <Card.Title style={{color:'white'}}>Plumber</Card.Title>
                                        <Card.Text style={{color:'white'}}>
                                            He is a Working Man for Your Needs
                                        </Card.Text>
                                        <Button variant="primary" onClick={()=>navigate('/plumsub')}>Click To Register</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} >
                                    <Card style={{ width: '18rem',backgroundColor:'black',justifyContent:'center', alignItemCenter:'center'}}>
                                    <Card.Img variant="top" src={electrician} />
                                    <Card.Body>
                                        <Card.Title style={{color:'white'}}>Electrician</Card.Title>
                                        <Card.Text style={{color:'white'}}>
                                            He is a Working Man for Your Needs
                                        </Card.Text>
                                        <Button variant="primary" onClick={()=>navigate('/elecsub')}>Click To Register</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} >
                                    <Card style={{ width: '18rem',backgroundColor:'black',justifyContent:'center', alignItemCenter:'center'}}>
                                    <Card.Img variant="top" src={homesaloon} />
                                    <Card.Body>
                                        <Card.Title style={{color:'white'}}>Home saloon</Card.Title>
                                        <Card.Text style={{color:'white'}}>
                                            He is a Working Man for Your Needs
                                        </Card.Text>
                                        <Button variant="primary" onClick={()=>navigate('/hsalsub')}>Click To Register</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                           </Row> 
                           <center>
                           <Button variant = "light" onClick={()=>navigate('/')}>Click to see all</Button>
                           </center>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </Card>
        </Col>
        </Row>
        </Container>
    </div>
    );
}
function App() {
    return (
    <About/>
    );
}
export default About;