import { Carousel } from "react-responsive-carousel";
import ReadMore from "../Components/ReadMore";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  // let  navigate = useNavigate();
  // function handleClick(){
  //   navigate("/product")
  // }

  return (
    <div>
      <Carousel>
        <div className="body-image">
          <h2 className="top"> ORGANIC FOOD IS ALWAYS HEALTY</h2>
        </div>
        <div className="body-image">
          <h2 className="top"> ORGANIC FOOD IS ALWAYS HEALTY</h2>
        </div>
        <div className="body-image1">
          <h2 className="top"> Products are always fresh</h2>
        </div>
      </Carousel>
      <div className="imgText">
        <div className="img1"></div>
        <div className="imgText2">
          <h5>
            Best Organic Fruits And Vegetables Tempor erat elitr rebum at clita.
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
            dolore erat amet Tempor erat elitr rebum at clita Aliqu diam amet
            diam et eos Clita duo justo magna dolore erat amet
          </h5>

          <Link to="/ReadMore" className="link">
            {" "}
            <button className="button">Read More </button>{" "}
          </Link>
        </div>
      </div>

      <div className="visit">
        <h2 className="visit-text">
          Visit Our Firm Tempor erat elitr rebum at clita. Diam dolor diam ipsum
          sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
          sed stet lorem sit clita duo justo magna dolore erat amet Tempor erat
          elitr rebum at clitaTempor erat elitr rebum at clita. Diam dolor diam
          ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
          sit, sed stet lorem sit clita duo justo magna dolore erat amet Tempor
          erat elitr rebum at clita Clita erat ipsum et lorem et s
        </h2>
        <Link to="/visit" className="link">
          {" "}
          <button className="visitButton">Visit Now</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
