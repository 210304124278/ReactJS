import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import { useState } from "react";
const Conditional=()=>{
    const [flag,setFlag]=useState(false);

    const func_one=()=>{
        setFlag(flag=>!flag);
    }
return(

    <>
    
    {
        flag?(<Dashboard></Dashboard>):(<Login></Login>)
    }
    
    <button onClick={func_one}>Toggle</button>
    </>
)
}
export default Conditional;