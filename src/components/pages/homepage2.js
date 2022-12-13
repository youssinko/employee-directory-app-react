import Header2 from "./header2";
import Data from "../../data";

import {useState , useEffect} from 'react'
import { useParams } from "react-router-dom";



export default function HomePage2(props){
    const [info, setInfo] = useState(null);
    const { name } = useParams()
    const getInfo = async () => {
        try {
            
            const data = Data.find(eachEmployee => eachEmployee.name === name)
         
            setInfo(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
       
        getInfo()
    }, [])

    const loaded = () => {
    return(
        <div className="homepage2">
        
<Header2 />
<img src={info.img} alt="img" />
<ul className="info">
<h2>{info.office}</h2>
<h2>{info.mobile}</h2>
<h2>{info.SMS}</h2>
<h2>{info.email}</h2>
</ul>

</div>
    )
}

const loading = () => {
    return <h2>Loading Employee ...</h2>
}
return (
    info ? loaded() : loading()
)
}