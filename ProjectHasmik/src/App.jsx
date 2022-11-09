import { useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Fruits from "./Pages/Fruits";
import Fresh from "./Pages/Fresh";
import Vegetables from "./Pages/Vegetables";
import "./App.css";
import Layouts from "./Components/Layouts";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ReadMore from "./Components/ReadMore";
import Visit from "./Components/Visit";
import fruits from "./DATA";
import Form from "./Components/form";
import ShoppingCard from "./Pages/ShoppingCard";


function App() {
  const [data,setData] = useState([...fruits]);
  const [selectedProducts,setSelectedProducts] = useState([]);
  const addToCard = (id)=>{
    setSelectedProducts([...selectedProducts,...data.filter(item => item.id == id)])
  }
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/fruits" element={<Fruits addToCard={addToCard} fruits={data}/>} />
          <Route path="/vegetables" element={<Vegetables addToCard={addToCard} fruits={data}/>} />
          <Route path="/fresh" element={<Fresh addToCard={addToCard} fruits={data}/>} />
          <Route path="/ReadMore" element={<ReadMore />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/form" element={<Form />} />
          <Route path="/shoppingCard" element={<ShoppingCard selectedProducts={selectedProducts}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;