import React, { useState, useEffect } from "react";
import './ProjectVideos.css';
import Footer from "../Footer/Footer";
import Tool, { Tool_mobile } from "../Tool/Tool";
import SDGslogo from "../SDGs_Page/SDGs_Setup/SDGs_logo";
import ProjectVideosSetUp, { SetupVideos } from "./setupVideos/setupVideos";
import { Search_mobile } from "../Tool/Search";

export const Videos = [
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
  const [currentVideo, setCurrentVideo] = useState("1");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 820);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Videos_body">
      <Tool />
      <Tool_mobile />
      <Search_mobile />
      <SDGslogo />
      <div className="header">
        <h2>PROJECT VIDEOS</h2>
      </div>
      <div className="Videos">
        {Videos.map((item) => (
          <div key={item.id} className="video-container">
            <iframe
              src={item.source}
              allow="autoplay"
              title={`Video - ${item.title}`}
              className="driveLink"
            ></iframe>
            <div className="title">{item.title}</div>
            <div className="btn-container">
              {isMobile ? (
                <button key={item.id} className="btnn">
                  <a href={item.source} target="_blank"  rel="noopener noreferrer">Zoom in</a>
                </button>
              ) : (
                <button key={item.id} className="btnn" onClick={() => setCurrentVideo(item.id)}>
                  Zoom in
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="meow"></div>
      {!isMobile && <ProjectVideosSetUp currentID={currentVideo} />}
      {!isMobile && <SetupVideos />}
      <Footer />
    </div>
  );
}

export default ProjectVideos;