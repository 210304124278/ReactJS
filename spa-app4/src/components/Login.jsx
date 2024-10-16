import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
const Login=()=>{

    const ref1=useRef(null);
    const ref2=useRef(null);
    const navigate=useNavigate();
    const login=()=>{
        axios.post("http://localhost:8080/login",{"user_name":ref1.current.value,"password":ref2.current.value}).then((posRes)=>{
            const {data}=posRes;
            const {login}=data;
            if(login=="success"){
                navigate("/dashboard");
            }
            else{
                navigate("/error");
            }
        },(errRes)=>{console.log(errRes);});
        // ref1.current.value=="ExcelR" && ref2.current.value=="ExcelR@123"?navigate("/dashboard"):navigate("/error");
    }

return(
    <>
    <input type="text" ref={ref1} placeholder="enter user name"></input>
    <input type="password" ref={ref2} placeholder="enter password" ></input>
    <br></br><br></br>
    <button onClick={login}>Login</button>
    </>
)
}
export default Login;