import React from "react";

const slideImages = [
  require("../Images/logo_youth_exchange.png"),
  require("../Images/hinh1.jpg"),
  require("../Images/hinh2.jpg"),
  require("../Images/hinh3.jpg"),
  require("../Images/logo_youth_exchange.png"),
  require("../Images/hinh1.jpg"),
];

function Slide() {
  return (
    <div className="gallery_homepage">
      {slideImages.map((image, index) => (
        <div key={index} className="slide">
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Slide;
