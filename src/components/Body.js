import Slider from "./Slider";
import Welcome from "./Welcome";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import ChatBaseScript from "./ChatBaseScript";

const Body = () => {
  return (
    <div className="body_container">
      <div id="poster"></div>

      <div id="welcome">
        <Slider />
        <Welcome />
        <Gallery />
        <ContactUs />
        <ChatBaseScript />
      </div>
    </div>
  );
};

export default Body;
