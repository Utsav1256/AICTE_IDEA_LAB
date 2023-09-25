import Pic1 from "../../static/images/DSC_0547.png";
import img1 from "../../static/images/AICTE_Idea.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div id="welcome_container">
      <div id="text">
        <h4>AICTE-Idea Lab | JISCE</h4>
        <h1>WELCOME</h1>
        <p>
          Welcome to the AICTE-Idea Lab website by JIS College of Engineering
          (JISCE)! Explore a world of innovation, creativity, and technology.
          <br />
          Join us in shaping the future of education and entrepreneurship.
          <br />
          Let's ignite the spark of innovation together. Welcome aboard!
        </p>
        {/* <div id="img">
          <img id="imge" src={img1} width="220px" height="150px" />
        </div> */}
        <Link to="/about">
          <div className="about-next-img"></div>
        </Link>
      </div>

      <div id="img">
        <img id="pic1" src={Pic1} width="220px" height="150px" />
      </div>
    </div>
  );
};

export default Welcome;
