import React from "react";
import video1 from "../video/video1.mp4";
import video2 from "../video/video2.mp4";
import video3 from "../video/video3.mp4";



function FunnyHamster() {
  const videos = [video1, video2,video3];

  return (
    <section id="video" className="funny-hamster py-5" >
      <div className="container">
        <div className="text-white text-center mb-5 mt-5">
          <h1  className="text-primary fs-1 fw-bold section-title">
            Funny Hamster Videos
          </h1>
        </div>
        <div className="row g-3">
          {videos.map((video, index) => (
            <div key={index} className="col-6 col-md-4 col-sm-auto  overflow-hidden m-auto mb-2">
              <video className="w-100" style={{objectFit:"cover"}} src={video} autoPlay muted loop/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FunnyHamster;
