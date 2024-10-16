import {Link,Route,Routes} from "react-router-dom";
import Comp1 from "./Comp1.jsx";
import Comp2 from "./Comp2.jsx";
import Comp3 from "./Comp3.jsx";
const Parent=()=>{
return(
    <>
    <Link to="/" style={{marginRight:100}} >Link1</Link>
    <Link to="/link2/222/laptop/50000" style={{marginRight:100}} >Link2</Link>
    <Link to="/link3/333/watch/10000" style={{marginRight:100}} >Link3</Link>
    <br></br><br></br>
    <Routes>
    <Route path="" element={<Comp1></Comp1>}></Route>
    <Route path="link2/:p_id/:p_name/:p_cost" element={<Comp2></Comp2>}></Route>
    <Route path="link3/:p_id/:p_name/:p_cost" element={<Comp3></Comp3>}></Route>
    </Routes>
    </>
)
}
export default Parent;