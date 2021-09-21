import { useEffect, useState } from "react";
import "./mobile.css";
import image from "./Capture.JPG";

function Mobile() {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState(image);

  useEffect(() => {
    const img = [
      "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg",
    ];
    const timer = setTimeout(() => {
      imgIndex + 1 >= img.length ? setImgIndex(0) : setImgIndex(imgIndex + 1);
    }, 3000);
    setImgUrl(img[imgIndex]);
    return () => clearTimeout(timer);
  }, [imgIndex]);
  return (
    <div className="App">
      <div className="another">
        <div className="mobile" style={{ backgroundColor: "black" }}>
          <div className="screen">
            <img src={image} alt="" />
          </div>
          <div className="home"></div>
          <div className="inner"></div>
          <ul className="volume">
            <li></li>
            <li></li>
          </ul>
          <ul className="silent">
            <li></li>
          </ul>
          <ul className="sleep">
            <li></li>
          </ul>
        </div>
      </div>
      <div className="center">
        <div className="mobile">
          <div className="screen">
            <img
              src={imgUrl}
              alt=""
              style={{
                width: "98%",
                height: "auto",
                marginTop: "4px",
                marginLeft: "3px",
              }}
            />
          </div>
          <div className="home"></div>
          <div className="inner"></div>
          <ul className="volume">
            <li></li>
            <li></li>
          </ul>
          <ul className="silent">
            <li></li>
          </ul>
          <ul className="sleep">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
