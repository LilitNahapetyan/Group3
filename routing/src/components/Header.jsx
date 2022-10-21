import { Link } from "react-router-dom";

function Header() {
    return <div style={{ height: "50px", border: "1px solid" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
    </div>;
  }
  
  export default Header;