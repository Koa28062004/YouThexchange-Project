import React, { useState, useEffect } from "react";
import '../../ProjectVideos/ProjectVideos.css';
import Footer from "../../Footer/Footer";
import Tool, { Tool_mobile } from "../../Tool/Tool";
import SDGslogo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import ProjectVideosSetUp, { SetupVideos } from "./setupVideos/setupVideos";
import { Search_mobile } from "../../Tool/Search";

export const Videos = [
  {
    id: "1",
    title: "MEETING 1",
    className: "M",
    source: "https://drive.google.com/file/d/1sN-XPPQ44--DFJGY949Ua06R8Izbln2H/preview",
},
{
    id: "2",
    title: "MEETING 2",
    className: "M",
    source: "https://drive.google.com/file/d/1uw56krHZ0uVB3u07mX6mX0vI4E98VS1J/preview"
},
{
    id: "3",
    title: "MEETING 3",
    className: "M",
    source: "https://drive.google.com/file/d/1_o3t_xDpebyNy9uYZcPnY2BKtS0AtK1h/preview"
},
{
    id: "4",
    title: "MEETING 4",
    className: "M",
    source: "https://drive.google.com/file/d/1ElmLlOoN17pg_t-CgcVz31rOHGHUhfXY/preview"
},
{
    id: "5",
    title: "MEETING 5",
    className: "M",
    source: "https://drive.google.com/file/d/1k1Lk0W6lVZBUMB5LGge5_k0Mv-1Bs6fJ/preview"
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
        <h2>PROJECT 3</h2>
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