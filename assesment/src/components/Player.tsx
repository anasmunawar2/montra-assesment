import Draggable from "react-draggable";
import { Scissors, Trash2 } from "lucide-react";
import BlueTrack from "../assets/blue-track.svg";
import PinkTrack from "../assets/pink-track.svg";
import Indicator from "../assets/indicator.svg";
import Zoom from "../assets/slider-zoom.svg";
import Back from "../assets/backward.svg";
import Next from "../assets/forward.svg";
import Pause from "../assets/pause.svg";
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
        <div className="flex-1 text-base sm:text-lg text-left">08:32</div>

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

        <div className="flex-1 flex justify-end space-x-2 mr-3 sm:space-x-4">
          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
          <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between font-normal bg-disabled text-[10px] sm:text-xs text-muted-normal border-b py-2 sm:py-3 mb-1 min-w-max">
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

      <div className="p-4">
        <div className="relative">
          <div className="flex flex-col space-y-2">
            <div className="h-[3rem] bg-primary-light relative mb-px rounded-lg">
              <div className="relative w-full h-full">
                <div className="absolute inset-0">
                  {Array.from({ length: 200 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-primary-dark"
                      style={{
                        left: `${(i / 200) * 100}%`,
                        height: `${Math.random() * 40 + 20}%`,
                        width: "0.125rem",
                        top: "50%",
                        borderRadius: "20px",
                        transform: "translateY(-50%)",
                        opacity: `${i / 25}`,
                      }}
                    />
                  ))}
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

            <div className="h-[3rem] bg-pink-light relative rounded-lg">
              <div className="absolute inset-0">
                {Array.from({ length: 200 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-pink"
                    style={{
                      left: `${(i / 200) * 100}%`,
                      height: `${Math.random() * 40 + 20}%`,
                      width: "0.125rem",
                      top: "50%",
                      borderRadius: "20px",
                      transform: "translateY(-50%)",
                      opacity: `${i / 25}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-0 z-10" style={{ left: "10%" }}>
            <img src={Indicator} alt="indicator" />
          </div>

          <div className="absolute left-3 top-0">
            <div className="flex items-center justify-center mb-[3.75rem]">
              <img src={BlueTrack} />
            </div>

            <div className="flex items-center justify-center">
              <img src={PinkTrack} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
