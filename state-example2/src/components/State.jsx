import { useState } from 'react';
const State=()=>{
    const [emps,setEmps]=useState([  {"e_id":111,"e_name":"emp1","e_image":"https://reqres.in/img/faces/1-image.jpg"},
                                     {"e_id":112,"e_name":"emp2","e_image":"https://reqres.in/img/faces/2-image.jpg"},
                                     {"e_id":113,"e_name":"emp3","e_image":"https://reqres.in/img/faces/3-image.jpg"} ,
                                      {"e_id":114,"e_name":"emp4","e_image":"https://reqres.in/img/faces/4-image.jpg"},
                                       {"e_id":115,"e_name":"emp5","e_image":"https://reqres.in/img/faces/5-image.jpg"} ]);
    return(

<>
{
   <table border={1}
           align="center"
           cellPadding={10}
           cellSpacing={10}>
         <thead>
            <tr>
               <th>e_id</th>
               <th>e_name</th>
               <th>e_image</th>
            </tr>
         </thead>
         <tbody>
            {
              emps.map((element,index)=>{
                return(
                    <tr key={index}>
                        <td>{element.e_id}</td>
                        <td>{element.e_name}</td>
                        <td><img src={element.e_image}></img></td>
                    </tr>
                )
              })  
            }
         </tbody>
         <tfoot></tfoot>
   </table>
}
   
</>
 )
}
export default State;