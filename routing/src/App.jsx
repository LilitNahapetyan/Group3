import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Layouts from "./components/Layouts";
import SingleProduct from "./pages/SingleProduct";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts/>}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path = "/products/:productId" element = {<SingleProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
