import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[20%] pl-8 md:pl-16 tracking-wide">
      <h1 className="font-bold text-xl md:text-3xl py-2">{title}</h1>
      <p className="w-1/2 py-2 my-4 hidden md:block">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black rounded-lg px-4 py-1 md:py-2 md:px-8 flex items-center mr-2 hover:opacity-80">
          <FaPlay className="mr-1" /> Play
        </button>
        <button className="bg-gray-500 md:py-2 md:px-7 px-4 py-1 rounded-lg text-white flex items-center mr-2 hover:opacity-80 ">
          <IoInformationCircleOutline className="mr-1" size={30} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
