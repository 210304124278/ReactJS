import Comp4 from './Comp4.jsx'
import { useState } from 'react' ;
const Comp3=()=>{
    const [str,setStr]=useState("hello");
    const [num,setNum]=useState(10);
return(

    <>
    <Comp4 str={str} num={num}></Comp4>
    </>
)
}
export default Comp3;