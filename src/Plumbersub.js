import { Container } from "react-bootstrap";
import Menubar from "./Menubar";
import "./Labours.css";
function Plumbersub(){
    return(
        <>
        <Menubar/>
        <br></br><br></br><br></br>
        <Container>
            <div className="full">
                <div className="sub">name</div>
                <div className="sub">exp</div>
                <div className="sub1">button</div>
            </div>
        </Container>
        </>
    )
}
export default Plumbersub;


// import './Hori.css';
// import { Row ,Col, Container, Button} from 'react-bootstrap';
// function Hori(){
//     return(
//         <>
//         <Container>
//             <div className="head">
//                 <Row >
//                     <Col md={5} id="sim">
//                         <div className='fonts'>
//                         <span style={{color:'blue',fontFamily:'cursive',fontSize:'20px'}}>Name : </span>Santhosh Kumar<br></br>
//                         <span style={{color:'blue',fontFamily:'cursive',fontSize:'20px'}}>PhoneNum : </span>8787878787<br></br>
//                         <span style={{color:'blue',fontFamily:'cursive',fontSize:'20px'}}>City :</span> Salem
//                         </div>
//                     </Col>
//                     <Col md={5} id="sim2" >
//                         <div className='fonts'>
//                             <span style={{color:'blue',fontFamily:'cursive',fontSize:'20px'}}>Rating : </span> ⭐⭐⭐⭐⭐ <br></br>
//                             <span style={{color:'blue',fontFamily:'cursive',fontSize:'20px'}}>Type : </span> Electrical field<br></br>
//                             <span style={{color:'blue',fontFamily:'cursive',fontSize:'20px'}}>Experience : </span>2 yrs
//                         </div>
//                     </Col>
//                     <Col md={2}>
//                         <div className='btn1'>
//                         <Button id="btn2" className='btn-lg btn-success'>Book</Button>
//                         </div>
//                     </Col>
//                 </Row>
//             </div>
//         </Container>
//         </>
//     );
// }
// export default Hori;




// //css Hori.css


// .head{
//     background-color: rgba(0, 0, 0, 0.048);
//     border-radius: 10px;
//     border: 2px brown outset;
//     padding: 10px;
//     padding-left: 20px;
// }
// .fonts{
//     text-align: justify;
//     font-weight:500;
//     text-align: center;
    
    
// }
// #sim{
//     border:2px  rgba(1, 250, 250, 0.308) outset;
//     background-color: rgba(8, 105, 105, 0.308);
//     border-radius: 12px;
//     margin-left: px;
// }
// #sim2{
//     border: 2px  rgba(2, 255, 99, 0.24) outset ;
//     background-color: rgba(17, 109, 52, 0.24);
//     border-radius: 12px;
//     margin-left: px;
// }

// #btn2{
//     padding-bottom: 30px;
//     text-align: center;
//     align-items: center;
//     justify-content:center;
// }
// .btn1{
//     text-align: center;
//     align-items: center;
//     justify-content: center;
// }
