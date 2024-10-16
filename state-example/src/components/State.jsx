import { useState } from 'react';
const State=()=>{
   const [name,setName]= useState("ExcelR");
   const [num1,setNum1]=useState(100);
   const [bool,setBool]=useState(true);
   const [arr1,setArr1]=useState([10,20,30,40,50]);
   const [obj,setObj]=useState({"key1":"reactjs","key2":"nodejs","key3":"mongodb"});
    return(
       
        <>

        <h1>{obj.key1}....{obj.key2}...{obj.key3}</h1>
        {
            arr1.map((element,index)=>{
                return <h1 key={index}>{element}</h1>
            })

        }
        {//conditional rendering
            bool?(<><h1>{name}</h1><h1>{num1}</h1></>):(<><h1>empty</h1></>)
        }
        
        
        
        
        </>
       
       
       
    )
}
export default State;