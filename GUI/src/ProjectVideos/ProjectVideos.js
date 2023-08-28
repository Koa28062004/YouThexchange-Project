import React from "react";
import './ProjectVideos.css';
import Image1 from './imgs/Meow1.png';
import Image2 from './imgs/Meow2.png';
import Image3 from './imgs/Meow3.png';
import Image4 from './imgs/Meow4.png';
import Image5 from './imgs/Meow5.png';
import Image6 from './imgs/Meow6.png';

const Videos = [
  {
    id: "1",
    imageLink: Image1,
    time: "24:07",
    title: "Meow1",
    className: "M"
  },
  {
    id: "2",
    imageLink: Image2,
    time: "24:07",
    title: "Meow2",
    className: "M"
  },
  {
    id: "3",
    imageLink: Image3,
    time: "24:07",
    title: "Meow3",
    className: "M"
  },
  {
    id: "4",
    imageLink: Image4,
    time: "24:07",
    title: "Meow4",
    className: "M"
  },
  {
    id: "5",
    imageLink: Image5,
    time: "24:07",
    title: "Meow5",
    className: "M"
  }
  ,{
    id: "6",
    imageLink: Image6,
    time: "24:07",
    title: "Meow6",
    className: "M"
  }
];

function ProjectVideos() {
  return (
    <a>
      <div className="Videos">
        {Videos.map((item) => (
          <div key = {item.id}>
            <img 
              src = {item.imageLink}
              alt = {item.title}
            />
            <b>{item.title}</b>
          </div>
        ))}
      </div>
    </a>
  );
}

export default ProjectVideos;