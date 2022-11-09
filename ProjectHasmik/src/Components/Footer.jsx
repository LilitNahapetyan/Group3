import { useState } from "react";
import { Link } from "react-router-dom";
function Footer() {
  const [inputValue, setInputValue] = useState("");
  const changeInput = (val) => {
    setInputValue(val);
  };
  return (
    <footer className="footer">
      <div>
        <h2>Foody</h2>
        <p className="text1">
          Diam do Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          totam cupiditate doloremque iste maiores maxime corporis facere.
          Mollitia
        </p>
      </div>
      <div>
        <h2>Address</h2>
        <p className="text1">
          <i></i> 123 Street, New York, USA
          <i></i> 123 Street, New York, USA
          <i></i> 123 Street, New York, USA
          <i></i> 123 Street, New York, USA
          <i></i> +012 345 67890
          <i></i> info@example.com
          <i></i> +012 345 67890
          <i></i> info@example.com
          <i></i> +012 345 67890
          <i></i> info@example.com
          <i></i> +012 345 67890
          <i></i> info@example.com
        </p>
      </div>
      <div>
        <h2>Quick Links</h2>
        <p className="text1">
          <i> Facebook</i>
          <i> YouTube</i>
          <i> GitHub</i>
          <i> W3 school</i>
        </p>
      </div>
      <div>
        <h2>newsLetter</h2>
        <Link to="/form" className="link">
          {" "}
          Sign in{" "}
        </Link>
      </div>
      <span className="aboutus"> Created by SFS students</span>
    </footer>
  );
}

export default Footer;
