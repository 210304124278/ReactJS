import { useState } from "react";
const Events2=()=>{
const [num,numSet]=useState(100);
const incr=()=>{
numSet(num=>num+1);
}
const decr=()=>{
    numSet(num=>num-1);
}
return(
    <>
    <h1>{num}</h1>
    <button onClick={incr}>Increment</button>
    <button onClick={decr}>Decrement</button>
    </>
)
}
export default Events2;
