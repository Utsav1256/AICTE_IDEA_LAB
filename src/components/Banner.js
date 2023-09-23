import JISCE_IMG from "../../static/images/jisce_logo-3.png";
import JISGroup_IMG from "../../static/images/JIS-Group-logo.png";
import AICTE_IMG from "../../static/images/aicte_logo_new.png";
import AICTE_Idea_IMG from "../../static/images/AICTE_Idea.png";

const Banner = () => {
  return (
    <div className="banner_container">
      <div id="img1">
        {/* <img src={JISCE_IMG} width="220px" height="50px" /> */}
      </div>
      <div id="img2">
        {/* <img src={AICTE_Idea_IMG} width="70px" height="52px" /> */}
      </div>

      <div id="img3">
        {/* <img src={AICTE_IMG} width="220px" height="50px" /> */}
      </div>
      <div id="img4">
        {/* <img src={JISGroup_IMG} width="80px" height="50px" /> */}
      </div>
    </div>
  );
};

export default Banner;
