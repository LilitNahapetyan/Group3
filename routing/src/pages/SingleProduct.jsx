import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [product,setProduct] = useState({});
  const {productId} = useParams();

  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${productId}`) .then(res => res.json())
    .then(json => setProduct(json));
  },[]);

  return (
    <div>
      {}
    </div>
  );
}

export default SingleProduct;
