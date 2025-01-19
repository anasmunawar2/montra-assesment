import Draggable from "react-draggable";
import { Scissors, Trash2 } from "lucide-react";
import BlueTrack from "../assets/blue-track.svg";
import PinkTrack from "../assets/pink-track.svg";
import Indicator from "../assets/indicator.svg";
import Zoom from "../assets/slider-zoom.svg";
import Back from "../assets/backward.svg";
import Next from "../assets/forward.svg";
import Pause from "../assets/pause.svg";
import BluePlayer from "../assets/player-blue.svg";
import PinkPlayer from "../assets/pink-player.svg";
import React, { useEffect, useState } from "react";

const Player = () => {
  const [numberOfMarkers, setNumberOfMarkers] = useState(22);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // sm breakpoint
        setNumberOfMarkers(11);
      } else if (window.innerWidth < 1024) {
        // md breakpoint
        setNumberOfMarkers(16);
      } else {
        setNumberOfMarkers(22);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex-1 text-base sm:text-lg md:text-left text-center">
          08:32
        </div>

        <div className="flex-1 flex justify-center space-x-2 sm:space-x-4">
          <img
            src={Back}
            alt="back"
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-900 cursor-pointer"
          />
          <img
            src={Pause}
            alt="pause"
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-900 cursor-pointer"
          />
          <img
            src={Next}
            alt="pause"
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-900 cursor-pointer"
          />
        </div>

        <div className="flex-1 flex md:justify-end justify-center space-x-2 sm:space-x-4">
          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
          <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between font-normal bg-disabled text-[10px] sm:text-xs text-muted-normal border-b py-2 sm:py-3 min-w-max">
        {Array.from({ length: numberOfMarkers }).map((_, i) => {
          const minutes = Math.floor(i * (22 / numberOfMarkers) * 2);
          return (
            <div
              key={i}
              className={`flex-none text-center px-2 sm:px-3 ${
                i < numberOfMarkers - 1 ? "border-r" : ""
              } border-muted h-3`}
            >
              {String(minutes).padStart(2, "0")}:{String(0).padStart(2, "0")}
            </div>
          );
        })}
      </div>

      <div className="px-4 py-2">
        <div className="relative">
          <div className="flex flex-col space-y-2">
            <div className="h-[3rem] bg-primary-light relative mb-px rounded-lg">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    className="w-full object-cover"
                    src={BluePlayer}
                    alt="blue track"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 9%)",
                      maskImage:
                        "linear-gradient(to right, transparent 0%, black 9%)",
                      WebkitMaskSize: "100% 100%",
                      maskSize: "100% 100%",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="relative w-full h-[3rem] bg-disabled overflow-hidden rounded-lg">
              <Draggable
                axis="x"
                bounds="parent"
                defaultPosition={{
                  x: (window.innerWidth - 11.438 * 16) / 2,
                  y: 0,
                }}
              >
                <div className="absolute rounded-lg cursor-grab">
                  <button className="inline-flex items-center w-[11.438rem] h-[3rem] bg-sea text-sea-dark rounded-xl text-sm shadow-sm font-medium">
                    <img src={Zoom} alt="zoom" />
                    Zoom<span className="text-sea-light px-2">2s</span>
                  </button>
                </div>
              </Draggable>
            </div>

            <div className="h-[2rem] bg-pink-light relative rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  className="w-full object-cover"
                  src={PinkPlayer}
                  alt="pink track"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 9%)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 9%)",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="absolute top-0 z-10" style={{ left: "15%" }}>
            <img src={Indicator} alt="indicator" className="h-48" />
          </div>

          <div className="absolute left-1 top-1">
            <div className="flex items-center justify-center mb-[3.9rem]">
              <img
                src={BlueTrack}
                alt="Blue Track"
                className="h-[3rem] w-[3rem] object-contain"
              />
            </div>

            <div className="flex items-center justify-center">
              <img
                src={PinkTrack}
                alt="Pink Track"
                className="h-[2rem] w-[3rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
