import axios from "axios";
import { useRef, useState } from "react";
const PutEx1=()=>{
    const ref1=useRef(null);
    const ref2=useRef(null);
    const [obj,setObj]=useState({});
    const my_func=()=>{
        axios.put(`https://reqres.in/api/users/2`,{'name':ref1.current.value,'job':ref2.current.value}).then((posRes)=>{console.log(posRes);
        const {data}=posRes;
        console.log(data);
        setObj(data);
    },(errRes)=>{console.log(errRes);})
    }

return(
<>
<input type="text" ref={ref1} placeholder="enter name"></input>
<br></br><br></br>
<input type="text" ref={ref2} placeholder="enter job"></input>
<br></br><br></br>
<button onClick={my_func}>ClickMe</button>
<br></br><br></br>
<h1>{JSON.stringify(obj)}</h1>
</>
)
}
export default PutEx1;