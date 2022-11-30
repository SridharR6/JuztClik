import { Container,Row,Col, Button } from "react-bootstrap";
import Menubar from "./Menubar";
import "./Labours.css";
import { useNavigate } from "react-router-dom";
function Plumbersub(){
    const navigate = useNavigate();
    return(
        <>
        <Menubar/>
        <br></br><br></br><br></br>
        <center><h2 style={{fontFamily:"Times New Roman"}}><b><u>Available Plumbers</u></b></h2></center>
        <br></br>

        <Container>
            <Row className="full">
                <Col xs = {6} md = {5}className="sub">
                    Name: Sridhar <br></br>
                    Mob : 9876543210 <br></br>
                    City: Erode
                </Col>
                <Col className="sub" xs = {6} md = {5}>
                    Experience: 5yrs <br></br>
                    Ratings(5): ⭐⭐⭐⭐⭐<br></br>
                    Other-info: Home specialist
                </Col>
                <Col className="sub1" xs = {12} md = {2}>
                    <Button variant = "dark" onClick={()=>navigate("/query")}> Book Now</Button>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className="full">
                <Col xs = {6} md = {5}className="sub">
                    Name: Subash <br></br>
                    Mob : 9876543210 <br></br>
                    City: Erode
                </Col>
                <Col className="sub" xs = {6} md = {5}>
                    Experience: 5yrs <br></br>
                    Ratings(5): ⭐⭐⭐⭐⭐<br></br>
                    Other-info: Wiring specialist
                </Col>
                <Col className="sub1" xs = {12} md = {2}>
                    <Button variant = "dark" onClick={()=>navigate("/query")}> Book Now</Button>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className="full">
                <Col xs = {6} md = {5}className="sub">
                    Name: Vishnu <br></br>
                    Mob : 9876543210 <br></br>
                    City: Erode
                </Col>
                <Col className="sub" xs = {6} md = {5}>
                    Experience: 5yrs <br></br>
                    Ratings(5): ⭐⭐⭐⭐⭐<br></br>
                    Other-info: Fixing specialist
                </Col>
                <Col className="sub1" xs = {12} md = {2}>
                    <Button variant = "dark" onClick={()=>navigate("/query")}> Book Now</Button>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className="full">
                <Col xs = {6} md = {5}className="sub">
                    Name: Sibiraj <br></br>
                    Mob : 9876543210 <br></br>
                    City: Erode
                </Col>
                <Col className="sub" xs = {6} md = {5}>
                    Experience: 5yrs <br></br>
                    Ratings(5): ⭐⭐⭐⭐⭐<br></br>
                    Other-info: Decor Lights man
                </Col>
                <Col className="sub1" xs = {12} md = {2}>
                    <Button variant = "dark" onClick={()=>navigate("/query")}> Book Now</Button>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className="full">
                <Col xs = {6} md = {5}className="sub">
                    Name: SK kumar <br></br>
                    Mob : 9876543210 <br></br>
                    City: Erode
                </Col>
                <Col className="sub" xs = {6} md = {5}>
                    Experience: 5yrs <br></br>
                    Ratings(5): ⭐⭐⭐⭐⭐<br></br>
                    Other-info: Designer home specialist
                </Col>
                <Col className="sub1" xs = {12} md = {2}>
                    <Button variant = "dark" onClick={()=>navigate("/query")}> Book Now</Button>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className="full">
                <Col xs = {6} md = {5}className="sub">
                    Name: Abcde <br></br>
                    Mob : 9876543210 <br></br>
                    City: Erode
                </Col>
                <Col className="sub" xs = {6} md = {5}>
                    Experience: 5yrs <br></br>
                    Ratings(5): ⭐⭐⭐⭐⭐<br></br>
                    Other-info: Home specialist
                </Col>
                <Col className="sub1" xs = {12} md = {2}>
                    <Button variant = "dark" onClick={()=>navigate("/query")}> Book Now</Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Plumbersub;



