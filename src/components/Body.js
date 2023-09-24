import Welcome from "./Welcome";
import Gallery from "./Gallery";
import Labs from "./Labs";
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
