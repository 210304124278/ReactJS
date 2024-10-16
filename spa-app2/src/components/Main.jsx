import {Route,Routes,Link} from "react-router-dom";
import Electronics from "./Electronics.jsx";
import Fashion from "./Fashion.jsx";
import Mobiles from "./Mobiles.jsx";
import Toys from "./Toys.jsx";
import Household from "./Household.jsx";
import Kids from "./Kids.jsx";
import Mens from "./Mens.jsx";
import Iphone from "./Iphone.jsx";
import Oneplus from "./Oneplus.jsx";
const Main=()=>{
   return(

    <>
    <Link to="/electronics" style={{marginRightr:100}}>electronics </Link>
    <Link to="/fashion" style={{marginRightr:100}}>fashion </Link>
    <Link to="/mobiles" style={{marginRightr:100}}>mobiles </Link>
    <br></br><br></br>
    <Routes>
    <Route path="electronics" element={<Electronics></Electronics>}>
        <Route path="electronics/toys" element={<Toys></Toys>}></Route>
        <Route path="electronics/household" element={<Household></Household>}></Route>
    </Route>

    <Route path="fashion" element={<Fashion></Fashion>}>
        <Route path="fashion/kids" element={<Kids></Kids>}></Route>
        <Route path="fashion/mens" element={<Mens></Mens>}></Route>
    </Route>

    <Route path="mobiles" element={<Mobiles></Mobiles>}>
        <Route path="mobiles/iphone" element={<Iphone></Iphone>}></Route>
        <Route path="mobiles/oneplus" element={<Oneplus></Oneplus>}></Route>
    </Route>

</Routes>
    
    </>
   ) 
}
export default Main;