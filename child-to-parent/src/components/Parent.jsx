import Child from "./Child.jsx";
import { useState } from "react";
const Parent=()=>{
    const [msg1,setMsg1]=useState("");
    const [msg2,setMsg2]=useState("");
    const [msg3,setMsg3]=useState("");
    const func_one=(param1,param2,param3)=>{
    setMsg1(param1);
    setMsg2(param2);
    setMsg3(param3);



//    console.log(param1,param2,param3);//ExcelR FullStack Training
    }
return(

    <>
    
    <Child func_one={func_one}></Child>
    
    <h1>{msg1}</h1>
    <h1>{msg2}</h1>
    <h1>{msg3}</h1>
    

    </>
)
}
export default Parent;