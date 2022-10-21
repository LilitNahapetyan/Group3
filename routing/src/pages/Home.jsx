import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Home(){
    const navigate = useNavigate();
    useEffect(()=>{
        let id = setTimeout(()=>navigate("/products"),5000);
        return ()=>clearTimeout(id);
    },[]);
    return <div>
        <h1>Home</h1>
    </div>
}

export default Home;

