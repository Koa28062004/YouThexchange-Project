import React from "react";

const slideImages = [
  require("../../imgs/logo_youth_exchange.png"),
  require("../../imgs/hinh1.jpg"),
  require("../../imgs/hinh2.jpg"),
  require("../../imgs/hinh3.jpg"),
  require("../../imgs/logo_youth_exchange.png"),
  require("../../imgs/hinh1.jpg"),
];

function Slide() {
  return (
    <div className="gallery">
      {slideImages.map((image, index) => (
        <div key={index} className="slide">
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Slide;
