import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SideImageOne from "./assets/sidebar-img-1.svg";
import SideImageTwo from "./assets/sidebar-img-2.svg";
import SideImageThree from "./assets/sidebar-img-3.svg";
import MainContent from "./assets/center-content.svg";
import UploadIcon from "./assets/upload-icon.svg";
import Forest from "./assets/forest.svg";
import Building from "./assets/building.svg";
import StarterIcon from "./assets/starter-icon.svg";
import Avatar from "./assets/avatar.svg";
import File from "./assets/file.svg";
import Layout from "./assets/layout.svg";
import Record from "./assets/record.svg";
import UploadCloud from "./assets/upload-cloud.svg";
import Type from "./assets/type.svg";
import CC from "./assets/closed-captioning.svg";
import Music from "./assets/music-note.svg";
import Orientation from "./assets/orientation.svg";
import Gradient from "./assets/gradient.svg";
import Opacity from "./assets/opacity.svg";
import Shadow from "./assets/blur.svg";
import ChevronLeft from "./assets/chevron-left.svg";

import { ChevronDown, MenuIcon, Plus, X } from "lucide-react";
import Player from "./components/Player";
function ToolbarItem({ icon, label, rightIcon = <ChevronDown /> }) {
  return (
    <div className="flex gap-1.5 overflow-hidden justify-center items-center self-stretch px-2 my-auto rounded-md">
      <div className="flex overflow-hidden flex-col justify-center self-stretch px-px py-[0.375rem] my-auto w-[1.5rem] h-[1.5rem]">
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={label}
            className="object-contain w-full h-full"
          />
        ) : (
          icon
        )}
      </div>
      <div className="self-stretch my-auto text-sm font-medium tracking-tight leading-none text-muted-dark">
        {label}
      </div>
      <div className="flex items-center justify-center self-stretch my-auto w-4 aspect-square">
        {rightIcon}
      </div>
    </div>
  );
}

const MobileMenu = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
    <div className="bg-white h-full w-64 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Menu</h2>
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="grid gap-4">
        {toolbarItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const MobileSettings = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
    <div className="bg-white h-full w-full max-w-md ml-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Settings</h2>
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Upload Section */}
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2">Upload Media</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <img src={UploadIcon} className="mx-auto mb-2" alt="upload" />
          <p className="text-sm">
            Drag and drop or
            <br />
            <span className="text-blue-600">browse files</span>
          </p>
        </div>
      </div>

      {/* Media Navigation */}
      <div className="flex space-x-4 mb-4 overflow-x-auto p-2 bg-gray-50 rounded-lg">
        {["Images", "Video", "Logo", "Unsplash"].map((item) => (
          <button
            key={item}
            className="px-3 py-1 whitespace-nowrap hover:bg-white hover:shadow-sm rounded-full"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 gap-2">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="aspect-video bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src={index % 2 === 0 ? Forest : Building}
              alt={`Media ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const toolbarItems = [
  {
    icon: (
      <img
        src={Orientation}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-[1.5rem] aspect-square"
      />
    ),
    label: "Orientation",
  },
  {
    icon: (
      <img
        src={Gradient}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-[1.5rem] aspect-square"
      />
    ),
    label: "Background",
  },
  {
    icon: (
      <img
        src={Opacity}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-[1.5rem] aspect-square"
      />
    ),
    label: "Opacity",
  },
  {
    icon: (
      <img
        src={Shadow}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-[1.5rem] aspect-square"
      />
    ),
    label: "Blur",
  },
];

const Sidebar = () => (
  <div className="w-[10rem] bg-disabled flex-shrink-0 border-r h-full overflow-y-auto">
    <div className="p-2 space-y-4">
      <div className="relative group">
        <div className="aspect-video bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer">
          <img
            src={SideImageOne}
            alt="Image1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer mt-2">
          <img
            src={SideImageTwo}
            alt="Image2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer mt-2">
          <img
            src={SideImageThree}
            alt="Image3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <button className="w-full shadow-sm border border-muted-secondary bg-white rounded-lg flex items-center justify-center p-2 hover:bg-muted">
        <Plus className="text-muted-primary" size={15} />
      </button>
    </div>
  </div>
);

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSettingsPanelVisible, setIsSettingsPanelVisible] = useState(true);

  const openSettingsPanel = () => {
    setIsSettingsPanelVisible(true);
  };

  const closeSettingsPanel = () => {
    setIsSettingsPanelVisible(false);
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        {/* Mobile Menus */}
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
        {isSettingsOpen && (
          <MobileSettings onClose={() => setIsSettingsOpen(false)} />
        )}

        {/* Top Navigation */}
        <div className="flex items-center justify-between p-2 sm:p-4 border-b border-muted">
          <div className="flex items-center flex-1 ">
            <button className="flex px-2.5 py-1.5 items-center font-medium text-muted-dark text-sm bg-white border border-muted px-2 py-1 - shadow-sm rounded-lg">
              <img src={ChevronLeft} alt="back" className="w-4 h-4 " />
              <span className="ml-1 hidden sm:inline">Back</span>
            </button>
          </div>

          <div className="flex items-center">
            <img
              src={StarterIcon}
              alt="starter"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <h1 className="text-base sm:text-xl font-medium text-black ml-2">
              Starter Project
            </h1>
          </div>

          <div className="flex items-center flex-1 justify-end space-x-2 sm:space-x-4">
            <button
              className="lg:hidden p-1"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button className="p-1">
              <img src={Avatar} alt="avatar" className="w-[32px] h-[32px]" />
            </button>
            <button className="px-2 sm:px-4 py-1.5 px-1.5 bg-primary text-sm font-medium text-white rounded-[0.375rem]">
              Export
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar - Hidden on mobile, shown in mobile menu */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Main Editor Content */}
          <div className="flex-1 flex flex-col pb-16 lg:pb-0">
            {/* Editor bar */}
            <div className="flex flex-wrap gap-1 justify-center items-center px-1.5 bg-white border-b border-zinc-100 h-[2.5rem]">
              {toolbarItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  <ToolbarItem icon={item.icon} label={item.label} />
                  {index < toolbarItems.length - 1 && (
                    <div className="flex shrink-0 self-stretch w-px h-8 bg-muted mt-2" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex-1 overflow-hidden">
              <img
                src={MainContent}
                alt="main-content"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="border-t">
              <Player />
            </div>
          </div>

          {/* Right Panel - Hidden on mobile */}
          <div className="hidden lg:flex">
            <AnimatePresence>
              {isSettingsPanelVisible && (
                <motion.div
                  className="w-[18.75] bg-white border-l border-r border-muted overflow-auto scrollbar-none"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 300 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-4 px-4 h-[2.5rem] border-b border-muted">
                    <h2 className="text-lg text-muted-dark font-medium ">
                      Media
                    </h2>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={closeSettingsPanel}
                    >
                      <X size={15} />
                    </button>
                  </div>

                  <div className="text-sm text-muted-normal font-medium mb-4 px-4 ">
                    Upload Media
                  </div>

                  {/* Upload Box */}
                  <div className="px-4">
                    <div className="border-[0.063rem] bg-disabled border-dashed border-muted rounded-lg p-8 mb-4 text-center hover:bg-white hover:border-primary transition">
                      <img
                        src={UploadIcon}
                        className="mx-auto mb-2 cursor-pointer"
                        alt="upload"
                      />
                      <p className="text-xl font-medium text-muted-dark">
                        Drag and drop File
                        <br />
                        or click to browse files
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex space-x-6 mb-4 text-sm text-muted-normal font-medium bg-disabled p-3 border border-muted">
                    <button className="text-black border bg-white rounded-[1.5rem] px-[0.5rem] py-0.5">
                      Images
                    </button>
                    <button className="">Video</button>
                    <button className="">Logo</button>
                    <button className="">Unsplash</button>
                  </div>

                  {/* Media Label */}
                  <div className="text-sm text-muted-normal font-medium mb-4 px-4">
                    Media
                  </div>

                  {/* Media Grid */}
                  <div className="grid grid-cols-2 gap-2 px-4 pb-6 border-b">
                    {[...Array(6)].map((_, index) => (
                      <div
                        key={index}
                        className="aspect-video bg-gray-100 rounded-lg overflow-hidden"
                      >
                        {index % 2 === 0 ? (
                          <img
                            src={Forest}
                            alt="Mountain landscape"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img
                            src={Building}
                            alt="Modern architecture"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right Side Icons */}
            <div className="flex flex-col space-y-2 p-2 border-l border-muted bg-disabled">
              <button
                className="p-2 hover:bg-muted rounded"
                onClick={openSettingsPanel}
              >
                <img src={File} alt="file" />
              </button>
              <button
                className="p-2 hover:bg-muted rounded"
                onClick={openSettingsPanel}
              >
                <img src={Layout} alt="layout" />
              </button>
              <button
                className="p-2 hover:bg-muted rounded"
                onClick={openSettingsPanel}
              >
                <img src={Record} alt="record" />
              </button>
              <button
                className="p-2 hover:bg-muted rounded"
                onClick={openSettingsPanel}
              >
                <img src={UploadCloud} alt="upload-cloud" />
              </button>
              <button
                className="p-2 hover:bg-muted rounded"
                onClick={openSettingsPanel}
              >
                <img src={Type} alt="type" />
              </button>
              <button
                className="p-2 hover:bg-muted rounded"
                onClick={openSettingsPanel}
              >
                <img src={CC} alt="cc" />
              </button>
              <button
                className="p-2 hover:bg-muted rounded"
                onClick={openSettingsPanel}
              >
                <img src={Music} alt="music" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden z-10 fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          {[File, Layout, Record, UploadCloud, Type, CC, Music].map(
            (Icon, index) => (
              <button
                key={index}
                className="p-2 hover:bg-gray-100 rounded"
                onClick={() => setIsSettingsOpen(true)}
              >
                <img src={Icon} alt={`icon-${index}`} className="w-5 h-5" />
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default App;
