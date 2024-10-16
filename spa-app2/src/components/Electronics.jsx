import {Link,Outlet} from "react-router-dom";
const Electronics=()=>{
return(
    <>
    <h1>electronics soon...</h1>
    <br></br><br></br>
    <Link to="electronics/toys" style={{marginRight:100}}>Toys</Link>
    <Link to="electronics/household" style={{marginRight:100}}>Household</Link>
    <br></br><br></br>
    <Outlet></Outlet>
    </>
)
}
export default Electronics;