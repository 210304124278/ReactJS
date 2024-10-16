import{Route,Routes,Link} from "react-router-dom";
import Watches from './Watches.jsx';
import Mobiles from "./Mobiles.jsx";
import Laptops from "./Laptops.jsx";
const Main=()=>{
    return(
        <>
        <Link to="/watches" style={{marginRight:100}}>Watches</Link>
        <Link to="/laptops" style={{marginRight:100}}>Laptops</Link>
        <Link to="/mobiles" style={{marginRight:100}}>Mobiles</Link>
        <br></br><br></br>
        <Routes>
          <Route path="watches" element={<Watches></Watches>}></Route>
          <Route path="laptops" element={<Laptops></Laptops>}></Route>
          <Route path="mobiles" element={<Mobiles></Mobiles>}></Route>
        </Routes>
        </>
    )
}
export default Main;