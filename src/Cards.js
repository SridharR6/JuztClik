import { Container,Card,Row,Col,Image} from "react-bootstrap";
import './cards.css';

import plumber from "./plumber.png";
import electrician from "./electrician.png";
import carpenter from "./carpenter.png";
import gardener from "./gardener.png";
import homesaloon from "./homesaloon.png";
import mechanic from "./mechanic.png";
import physio from "./physio.png";
import housecleaning from "./housecleaning.png";

import { useNavigate } from "react-router-dom";

function Cards(){
    const navigate = useNavigate();
    return( 
        <>
        <section>
        <div>
                <div className="containerr">
                        
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href=""><Image  src={electrician} alt="pic" rounded /></a>
                                         
                                    </div>
                                    <div class="contentBx">
                                        <h3>Electrician</h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href = "/elecsub" onClick={()=>navigate('/elecsub')} style={{color:"black"}}><u><b>Click to Register</b></u></a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src={plumber} alt="pic"></Image></a>
                                    </div>
                                    <div class="contentBx">
                                        <h3>Plumber</h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href = "/plumsub" onClick={()=>navigate('/plumsub')} style={{color:"black"}}><u><b>Click to Register</b></u></a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src={carpenter} alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>Carpenter</h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>

                            <ul class="sci" >
                            <li>
                                <a href = "/carpsub" onClick={()=>navigate('/carpsub')} style={{color:"black"}}><u><b>Click to Register</b></u></a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src={mechanic} alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>Mechanic</h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href = "/mechsub" onClick={()=>navigate('/mechsub')} style={{color:"black"}}><u><b>Click to Register</b></u></a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src={gardener} alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>Gardener </h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href = "/gardsub" onClick={()=>navigate('/gardsub')} style={{color:"black"}}><u><b>Click to Register</b></u></a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                    <a href="#"><Image  src={housecleaning} alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>House Cleaning </h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href = "/hcleansub" onClick={()=>navigate('/hcleansub')} style={{color:"black"}}><u><b>Click to Register</b></u></a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src={physio} alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>Physiotherapist</h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href = "/physiosub" onClick={()=>navigate('/physiosub')} style={{color:"black"}}><u><b>Click to Register</b></u></a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src={homesaloon} alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>Home saloon </h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href = "/hsalsub" onClick={()=>navigate('/hsalsub')} style={{color:"black"}}><u><b>Click to Register</b></u></a>
                            </li>
                        </ul>
                        </Card>
                </div>
        </div>
        </section>
        </>

    );
}
export default Cards;
