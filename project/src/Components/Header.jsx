import {Link} from "react-router-dom";
function Header(){
    return <div className="header-container">
        <Link to="/" className ="link">Home</Link>
        <Link to="/books" className="link">Books</Link>
    </div>
}

export default Header;