import JISCE_IMG from "../../static/images/jisce_logo-3.png";
import JISGroup_IMG from "../../static/images/JIS-Group-logo.png";
import AICTE_IMG from "../../static/images/aicte_logo_new.png";

const Banner = () => {
  return (
    <div className="banner_container">
      <div id="img1">
        <img src={JISCE_IMG} width="200px" height="50px" />
      </div>
      <div id="img3">
        <img src={AICTE_IMG} width="200px" height="50px" />
      </div>
      <div id="img2">
        <img src={JISGroup_IMG} width="80px" height="50px" />
      </div>
    </div>
  );
};

export default Banner;
