import { useState } from "react";
const Events3=()=>{
    const [str,setStr]=useState("");
    const func_one=(param1,param2)=>{
     param1=="ExcelR" && param2=="ExcelR@123"?setStr("Login Sucess"):setStr("Login Failed");
    }
return(

    <>
    
    <button onClick={()=>(func_one("ExcelR","ExcelR@123"))}>sButton3</button>
    <button onDoubleClick={()=>(func_one("ExcelR","ExcelR@123"))}>dButton3</button>
    <br></br>
    <h1>{str}</h1>
    </>
)
}
export default Events3;