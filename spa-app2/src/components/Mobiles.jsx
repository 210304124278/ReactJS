import {Link,Outlet} from "react-router-dom";
const Mobiles=()=>{
return(

    <>
    <h1>mobiles items soon...</h1>
    <Link to="mobiles/iphone" style={{marginRight:100}}>iphone</Link>
    <Link to="mobiles/oneplus" style={{marginRight:100}}>oneplus</Link>
    <br></br><br></br>
    <Outlet></Outlet>
    </>
)
}
export default Mobiles;