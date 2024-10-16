import {useParams} from "react-router-dom";
const Comp3=()=>{
    const params=useParams();
return(
    <>
    <h1>{params.p_id}....{params.p_name}....{params.p_cost}</h1>
    </>
)
}
export default Comp3;