import Media from "../media/media";
import { useState } from "react";

const Gallery = () => {
  const [file, setFile] = useState(null);

  console.log(Media);
  return (
    <div id="gallery_container">
      <div id="media_container">
        {Media.map((file, index) => (
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
  );
};

export default Gallery;
