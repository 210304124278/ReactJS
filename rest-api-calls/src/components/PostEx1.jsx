import axios from "axios";
import {useRef,useState} from 'react';
const PostEx1=()=>{
    const ref1=useRef(null);
    const ref2=useRef(null);
    const [obj,setObj]=useState({});
    const api_call=()=>{
        axios.post(`https://reqres.in/api/register`,{"email":ref1.current.value,"password":ref2.current.value}).then((posRes)=>{console.log(posRes);
        const {data}=posRes;
        console.log(data);
        setObj(data);
    },(errRes)=>{console.log(errRes);})
    }
    return(

        <>
        <input type="email" ref={ref1} placeholder="enter email"></input>
        <br></br><br></br>
        <input type="password" ref={ref2} placeholder="enter password"></input>
        <br></br><br></br>
        <button onClick={api_call}>ClickMe</button>
        <br></br><br></br>
        <h1> {JSON.stringify(obj)}</h1>
        </>
    )
}
export default PostEx1;