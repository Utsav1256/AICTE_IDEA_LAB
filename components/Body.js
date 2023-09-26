import Slider from "./Slider";
import Welcome from "./Welcome";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Location from "./Location";
import Footer from "./Footer";
const Body = () => {
  return (
    <div className="body_container">
      <div id="poster"></div>

      <div id="welcome">
        <Slider />
        <Welcome />
        <Gallery />
        <ContactUs />
        <Location />
        <Footer />
      </div>
    </div>
  );
};

export default Body;
