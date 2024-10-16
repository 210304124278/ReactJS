import axios from "axios";
import {useEffect,useState} from "react";
const GetEx1=()=>{
 const [res,setRes]=useState([]);

    useEffect(()=>{
        axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
        const {data}=posRes;  
        const {records}=data;
        setRes(records);
console.log(records);
        // console.log(data);    
        // console.log(posRes);  
        },(errRes)=>{
            console.log(errRes);
        })
    },[])
    return(
    <>
    <table
         border={1}
         align="center"
         cellPadding={10}
         cellSpacing={10}>
            <thead>
             <tr>
                <th>Name</th>
                <th>City</th>
                <th>Country</th>
             </tr>
            </thead>
            <tbody>
                {
                res.map((element,index)=>{
               return(
                <tr key={index}>
                  <td>{element.Name}</td>
                  <td>{element.City}</td>
                  <td>{element.Country}</td>
                </tr>
               )
                })

                }
            </tbody>
            <tfoot></tfoot>
         </table>
    
    </>
)
}
export default GetEx1;
