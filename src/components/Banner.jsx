import "./banner.css";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
const Banner = () => {
  return (
    <div className="Banner-Container">
      <div className="banner-info">
        <span className="culinary">Culinary</span>
        <span className="culinary-info"> (358)</span>
        <span className="gt">&gt;</span>
        <span className="culinary">Italy</span>
        <span className="culinary-info"> (244)</span>
        <span className="gt">&gt;</span>
      </div>
      <div className="banner-grid">
        <img src={one} alt="one" className="gallery-img grid-item-1" />
        <img src={two} alt="two" className=" gallery-img grid-item-2" />
        <img src={three} alt="three" className="gallery-img grid-item-3" />
        <img src={four} alt="four" className="gallery-img grid-item-4" />
      </div>
      <div className="banner-heading">
        <h4>
          7 Day All-inclusive Italy Luxury Culinary Vacation in Beautiful Roman
          Countryside
        </h4>
        <p>
          La Cucina Sabina, Strada Provinciale Pascolare 164, Palombara Sabina,
          Rome, Lazio, Italy
        </p>
      </div>
    </div>
  );
};

export default Banner;
