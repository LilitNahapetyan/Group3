import { useEffect } from "react";

function ComponentNew({id}){
    useEffect(()=>{
        console.log("Component new is mounted");
        return ()=>{
            console.log("Component new is unmounted");
            clearTimeout(id)
        }
    },[])
    return <div>
        <h1>Component</h1>
    </div>
}
export default ComponentNew;