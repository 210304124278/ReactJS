import {Route,Routes} from "react-router-dom";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Error from "./Error.jsx";
const Parent=()=>{
return(

    <>
    <Routes>

        <Route path="" element={<Login></Login>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="error" element={<Error></Error>}></Route>
    </Routes>
    
    
    </>
)
}
export default Parent;