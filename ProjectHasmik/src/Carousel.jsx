import { useEffect, useState, Children, cloneElement } from "react";
import { Carousel } from "react-responsive-carousel";
import {FaChevronLeft,FaChevronRight} from `react-icons/fa`;
const PAGE_WIDTH = 450
export const Carousel = ({ children }) => {
    const [pages,setPages]=useState([])
    const handleLeftArrowClick = () =>{
console.log(`handleLeftArrowClick`);
    }
    const handleRightArrowClick = () =>{
        console.log(`handleRightArrowClick`); 
    }
 useEffect(()=>{
setPages(
Children.map(children,child => {
    return cloneElement(child, {
        style:{
            height:"100%",
            maxWidth: `${PAGE_WIDTH}px`,
            minWidth:`${PAGE_WIDTH}px`,
        },

        
    })
})
)
 },[])

    return(
        <div className="main-container"> 
        <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}/>
        <div className="window">
            
            <div className="all-pages-container"> {pages}</div>
        </div>
        <FaChevronRight className="arrow" onClick={handleRightArrowClick}/>
         </div>
    )
}


export default Carousel;