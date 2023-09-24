import Media from "../media/media";
import { useState } from "react";

const Gallery = () => {
  const [file, setFile] = useState(null);

  console.log(Media);
  return (
    <div id="gallery_container">
      <h1>Gallery</h1>
      <div id="media">
        <div id="one">
          <div id="imge1"></div>
          <div id="imge2">
            <h4>Labs</h4>
          </div>

          {/* <div id="only">
            <div id="imge3"></div>
            <div id="imge4"></div>
          </div> */}
        </div>

        <div id="two">
          <div id="imge5"></div>
          <div id="imge6"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
