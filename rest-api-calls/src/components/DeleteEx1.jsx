import axios from "axios";
import { useEffect,useState } from "react";

const DeleteEx1=()=>{
const [num,setNum]=useState(null);
useEffect(()=>{
    axios.delete(`https://reqres.in/api/users/2`).then((posRes)=>{console.log(posRes);
  const {status}=posRes;
  setNum(status);
  console.log(status);
},(errRes)=>{console.log(errRes);})
},[])


    return(
<>

<h1>{num}</h1>

</>
)
}
export default DeleteEx1;
