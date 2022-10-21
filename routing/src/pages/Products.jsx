import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchParams,setSearchParams] = useSearchParams();
  // const x = useLocation();

 
  useEffect(() => {
    // console.log(x.state.id);
    // console.log(x);
    let URL = "https://dummyjson.com/products";
    const searchP = searchParams.get("key");
   if(searchP){
    URL = `https://dummyjson.com/products/search?q=${searchP}`
   }
    fetch(URL)
      .then((responce) => responce.json())
      .then((json) => setProducts(json.products));
  }, [searchParams]);

  const searchProducts = () => {
      setInputValue("");
      setSearchParams({key:inputValue});
  };
  return (
    <div>
      <h1>Products</h1>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Search..."
      />
      <button onClick={searchProducts}>Search</button>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
