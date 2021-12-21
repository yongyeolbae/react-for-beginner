import {useParams} from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

function Detail() {
    const [loading, setLoading]= useState(true);
    const [detail, setDetail]= useState([]);
    const {id}=useParams();
    const getMovie=async()=>{
        const json = await(await(fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json();
        setLoading(false);
        setDetail(json);

    }

    useEffect(()=> {
        getMovie();
    },[])
    return (
    <div>
        {loading ? <h1>Loading...</h1>:
        <div>{detail}</div>
        }
    </div>
    )
}

export default Detail;