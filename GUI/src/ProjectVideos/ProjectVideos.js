import React from "react";
import './ProjectVideos.css';
import Footer from "../Footer/Footer";
import Tool,{Tool_mobile} from "../Tool/Tool";
import SDGslogo from "../SDGs_Page/SDGs_Setup/SDGs_logo";
import { Search_mobile } from "../Tool/Search";
const Videos = [
  {
    id: "1",
    title: "Meow1",
    className: "M",
    source: "https://drive.google.com/file/d/1JOZBkMwOllSNg7ameXnAj1dlagusMeux/preview"
  },
  {
    id: "2",
    title: "Meow2",
    className: "M",
    source: "https://drive.google.com/file/d/1O1JeMbe5lWVs1H7b8IeW2K1GAYcmsY5i/preview"
  },
  {
    id: "3",
    title: "Meow3",
    className: "M",
    source: "https://drive.google.com/drive/u/0/my-drive"
  },
  {
    id: "4",
    title: "Meow4",
    className: "M",
    source: "https://drive.google.com/drive/u/0/my-drive"
  },
  {
    id: "5",
    title: "Meow5",
    className: "M",
    source: "https://drive.google.com/drive/u/0/my-drive"
  },
  {
    id: "6",
    title: "Meow6",
    className: "M",
    source: "https://drive.google.com/drive/u/0/my-drive"
  }
];

function ProjectVideos() {
  return (
    <div className="Videos_body">
      <Tool />
      <Tool_mobile />
      <Search_mobile />
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
