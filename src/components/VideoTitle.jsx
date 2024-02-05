import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[20%] pl-16 tracking-wide">
      <h1 className="font-bold text-3xl py-2">{title}</h1>
      <p className="w-1/2 py-2 my-4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black rounded-lg py-2 px-8 flex items-center mr-2 hover:opacity-80">
          <FaPlay className="mr-1" /> Play
        </button>
        <button className="bg-gray-500 py-2 px-7 rounded-lg text-white flex items-center mr-2 hover:opacity-80 ">
          <IoInformationCircleOutline className="mr-1" size={30} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
