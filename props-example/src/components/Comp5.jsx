import Comp6 from "./Comp6.jsx";
import { useState } from "react";
const Comp5=()=>{
    const [land,setLand]=useState("10Acr");
return(
    <>
    <Comp6 land={land}></Comp6>
    </>
)
}
export default Comp5;