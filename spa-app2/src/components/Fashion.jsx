import {Link,Outlet} from "react-router-dom";
const Fashion=()=>{
return(

    <>
    <h1>fashion items soon...</h1>
    <Link to="fashion/kids" style={{marginRight:100}}>Kids</Link>
    <Link to="fashion/mens" style={{marginRight:100}}>Mens</Link>
    <br></br><br></br>
    <Outlet></Outlet>
    </>
)
}
export default Fashion;