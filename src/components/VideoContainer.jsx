import React from "react";
import useMovieVideo from "../hooks/useMovieVideo";

const VideoContainer = ({ movieId }) => {
  const trailer = useMovieVideo(movieId);
  if (!trailer) return;

  return (
    <div className="w-full">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailer.key + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
