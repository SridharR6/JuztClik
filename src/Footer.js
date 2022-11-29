import { Col, Row , Container} from "react-bootstrap";
import "./Footer.css";
function Footer(){
    return(
        <>
        <Container>
            <Row style = {
                {
                    textAlign:"center",
                    backgroundColor:"blue",
                    color:"white",
                    opacity:"0.3",
                    alignItems:"center",
                    justifyContent:"center",
                    paddingTop:"1%",
                    paddingBottom:"1%"
                }
            }>
                
                <Col xs = {6} md = {2}>SUBASH V</Col>
                <Col xs = {6} md = {2}>SRIDHAR R</Col>
                <Col xs = {6} md = {2}>SIBIRAJ M</Col>
                <Col xs = {6} md = {2}>VISHNU KUMAR K</Col>
                <Col xs = {12} md = {2}>SANTHOSH KUMAR S</Col>
            </Row>
            </Container>
        </>
    )
}
export default Footer;