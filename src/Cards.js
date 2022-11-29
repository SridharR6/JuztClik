import { Container,Card,Row,Col,Image} from "react-bootstrap";
import './cards.css';
import plumber from "./plumber.png";
import electrician from "./electrician.png";
function Cards(){
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
                                        <h3>Electrician  </h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href="" style={{color:"black"}}>Click to Register</a>
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
                                <a href="" style={{color:"black"}}>Click to Register</a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src="images/plumber.png" alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>Carpenter</h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>

                            <ul class="sci" >
                            <li>
                                <a href="#" style={{color:"black"}}>Click to Register</a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src="images/car.jpg" alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>Mechanic</h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href="" style={{color:"black"}}>Click to Register</a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src="images/electrical.png" alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>Gardener </h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href="" style={{color:"black"}}>Click to Register</a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src="images/electrical.png" alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>House Cleaning </h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href="" style={{color:"black"}}>Click to Register</a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src="images/electrical.png" alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>Laundry  services</h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href="" style={{color:"black"}}>Click to Register</a>
                            </li>
                        </ul>
                        </Card>
                        <Card>
                            <div class="content">
                                    <div class="imgBx">
                                        <a href="#"><Image  src="images/electrical.png" alt="pic"></Image></a>
                                        
                                    </div>
                                    <div class="contentBx">
                                        <h3>Home saloon </h3>
                                        <br></br>
                                        <br></br>
                                    </div>
                            </div>
                            <ul class="sci">
                            <li>
                                <a href="" style={{color:"black"}}>Click to Register</a>
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
