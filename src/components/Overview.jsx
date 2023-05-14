import AccordionComponent from "./Accordion";
import "./overview.css";
import SideContainer from "./SideContainer";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-wrapper">
        <div className="overview-main">
          <h5>Overview</h5>
          <h3>Luxury Cooking Holiday on Mountains near Rome, Italy</h3>
          <div className="blue-heading">
            This listing has one of the 10 most popular offers available in the
            website
          </div>
          <p>
            La Cucina Sabina hosts a luxury culinary and cultural vacation
            program at a private, modern villa. La Cucina Sabina combines food,
            culture, exclusive excursions, and fun into an experience of a
            lifetime! You will enjoy access to places and people you would never
            find on your own. This creates a unique experience that is
            unforgettable. When you depart after a week of the hospitality, you
            all feel like you got to know the “real Italy” and their people and
            culture.{" "}
          </p>
          <h4>Meet the instructors</h4>
          <div className="instructor-detail">
            <img
              src="https://photos.tpn.to/oh/in/mk/mm/120x120.jpg"
              alt="instructor"
            />
            <div className="barbara-info">
              <span>Barbara</span>
              <p>Read more</p>
            </div>
          </div>
          <div className="highlights">
            <h3>Highlights</h3>
            <li>Authentic Italian cooking lessons</li>
            <li>
              Winery visit and a tasting overlooking beautiful Lake Bolsena
            </li>
            <li>
              Olive oils tasting and lesson on understanding what makes an olive
              oil great
            </li>
            <li>A guided tour of the beautiful gardens of Villa d-Este</li>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <li>Beginner</li>
            <li>Intermediate</li>
            <li>Advance</li>
          </div>
        </div>
        
        <AccordionComponent />
      </div>
      <div className="overview-side-container">
        <SideContainer />
      </div>
    </div>
  );
};

export default Overview;
