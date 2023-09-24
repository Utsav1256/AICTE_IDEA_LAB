import Media from "../media/media";
import { useState } from "react";

const Labs = () => {
  const [file, setFile] = useState(null);

  return (
    <div id="labs_container">
      <h1>Our Labs</h1>
      <div id="media_container">
        {Media[0].map((file, index) => (
          <div className="media" key={index} onClick={() => setFile(file)}>
            {/* {console.log({ file })} */}
            <img src={file.url} alt="" />
          </div>
        ))}
      </div>

      <div id="popup_media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}>&times;</span>
        {<img src={file?.url} />}
      </div>
    </div>
    // <div id="labs_container">
    //   <h1>Our Labs</h1>
    //   <div id="one">
    //     <div id="imge1"></div>
    //     <div id="imge2"></div>
    //     <div id="only">
    //       <div id="imge3"></div>
    //       <div id="imge4"></div>
    //     </div>
    //   </div>
    //   <div id="two">
    //     <div id="img5"></div>
    //     <div id="img6"></div>
    //   </div>
    // </div>
  );
};

export default Labs;
