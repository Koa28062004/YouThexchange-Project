import React from "react";
import './ProjectVideos.css';
import Image1 from './imgs/Meow1.png';
import Image2 from './imgs/Meow2.png';
import Image3 from './imgs/Meow3.png';
import Image4 from './imgs/Meow4.png';
import Image5 from './imgs/Meow5.png';
import Image6 from './imgs/Meow6.png';
import Footer from "../Footer/Footer";
import Tool from "../Tool/Tool";
import SDGslogo from "../SDGs_Page/SDGs_Setup/SDGs_logo";
import ReactPlayer from 'react-player';

const Videos = [
  {
    id: "1",
    imageLink: Image1,
    title: "Meow1",
    className: "M",
    source: "https://drive.google.com/file/d/1JOZBkMwOllSNg7ameXnAj1dlagusMeux/preview"
  },
  {
    id: "2",
    imageLink: Image2,
    title: "Meow2",
    className: "M",
    source: "https://drive.google.com/file/d/1O1JeMbe5lWVs1H7b8IeW2K1GAYcmsY5i/preview"
  },
  {
    id: "3",
    imageLink: Image3,
    title: "Meow3",
    className: "M",
    source: "https://drive.google.com/drive/u/0/my-drive"
  },
  {
    id: "4",
    imageLink: Image4,
    title: "Meow4",
    className: "M",
    source: "https://drive.google.com/drive/u/0/my-drive"
  },
  {
    id: "5",
    imageLink: Image5,
    title: "Meow5",
    className: "M",
    source: "https://drive.google.com/drive/u/0/my-drive"
  },
  {
    id: "6",
    imageLink: Image6,
    title: "Meow6",
    className: "M",
    source: "https://drive.google.com/drive/u/0/my-drive"
  }
];

function ProjectVideos() {
  return (
    <div className="Videos_body">
      <Tool />
      <SDGslogo />
      <div className="Videos">
        {Videos.map((item) => (
          <div key={item.id} className="video-container">
            <iframe
              src={item.source}
              allow="autoplay"
              title={`Video - ${item.title}`}
              className="driveLink"
            ></iframe>
            <div className="title">{item.title}</div> {/* Display the title below the video */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProjectVideos;
