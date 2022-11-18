import Menubar from "./Menubar";
import Cards from "./Cards";
function Home(){
    return (
        <>
            <Menubar/>
            <br></br>
            <div style={
                {
                    backgroundColor:"white",
                }
            }>
            <Cards/>
            </div>
        </>
    );
}
export default Home; 