import { useEffect, useState } from "react";
function ResizeScreen(){
  const [mobile,setMobile] = useState(window.innerWidth < 1024);

  useEffect(()=>{
    const resizeFunction = ()=>{
     setMobile(innerWidth<1024);
    }
    window.addEventListener("resize",resizeFunction)

    return ()=>{
        window.removeEventListener("resize",resizeFunction)
    }
  },[])

  return <div>
    {mobile ? <div>Mobile</div> : <div>Desktop</div>}
  </div>
}

export default ResizeScreen;