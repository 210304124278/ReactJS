import { useRef, useState } from "react";
const Events4=()=>{
    const uname=useRef(null);
    const upwd=useRef(null);
    const [res,setRes]=useState("");
    const login=()=>{
        uname.current.value=="ExcelR" && upwd.current.value=="ExcelR@123"?setRes("Login Success"):setRes("Login Failed");
    }
return(

    <>
    <input type="text" ref={uname}></input><br></br><br></br>
    <input type="password" ref={upwd}></input> <br></br><br></br>   
    <button onClick={login}>Login</button>
    <h1>{res}</h1>
    </>
)
}
export default Events4;
