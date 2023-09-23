import Welcome from "./Welcome";
import Gallery from "./Gallery";
import bcg1 from "../../static/images/bcg1.jpg";
const Body = () => {
  return (
    <div className="body_container">
      <div id="poster"></div>
      <div id="welcome">
        {/* <Welcome /> */}
        <Gallery />
      </div>
    </div>
  );
};

export default Body;
