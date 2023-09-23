import Welcome from "./Welcome";
import bcg1 from "../../static/images/bcg1.jpg";
const Body = () => {
  return (
    <div className="body_container">
      <div id="poster"></div>
      <div id="welcome">
        <Welcome />
      </div>
    </div>
  );
};

export default Body;
