import React, { useState } from "react";

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

import { ChevronDown, ChevronLeft, MenuIcon, Plus, X } from "lucide-react";
import Player from "./components/Player";

function ToolbarItem({ icon, label, rightIcon = <ChevronDown /> }) {
  return (
    <div className="flex overflow-hidden gap-1.5 justify-center items-center self-stretch px-2 py-2 my-auto rounded-md min-h-[1.75rem] ">
      <div className="flex overflow-hidden flex-col justify-center self-stretch px-px py-1 my-auto w-4">
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

function Divider() {
  return <div className="flex shrink-0 self-stretch w-px h-8 bg-muted mt-2" />;
}

const toolbarItems = [
  {
    icon: (
      <img
        src={Orientation}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
    ),
    label: "Orientation",
  },
  {
    icon: (
      <img
        src={Gradient}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
    ),
    label: "Background",
  },
  {
    icon: (
      <img
        src={Opacity}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
    ),
    label: "Opacity",
  },
  {
    icon: (
      <img
        src={Shadow}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
    ),
    label: "Blur",
  },
];

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(true); // Changed default to true since panel is initially visible
  const [isSettingsPanelVisible, setIsSettingsPanelVisible] = useState(true);

  const MobileMenu = () => (
    <div className="fixed inset-0  lg:hidden">
      {/* Mobile menu content remains the same */}
    </div>
  );

  const MobileSettings = () => (
    <div className="fixed inset-0  z-50 lg:hidden">
      {/* Mobile settings content remains the same */}
    </div>
  );

  const openSettingsPanel = () => {
    setIsSettingsPanelVisible(true);
  };

  const closeSettingsPanel = () => {
    setIsSettingsPanelVisible(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Mobile Menus */}
      {isMobileMenuOpen && <MobileMenu />}
      {isSettingsOpen && <MobileSettings />}

      {/* Top Navigation */}
      <div className="flex items-center justify-between p-4 border-b border-muted">
        {/* Left Section */}
        <div className="flex items-center flex-1 space-x-4">
          <button className="flex items-center font-medium text-black text-xl bg-white border border-muted px-4 py-2 shadow-md rounded-lg hover:text-gray-900">
            <ChevronLeft className="w-5 h-5" />
            <span className="ml-2 hidden sm:inline">Back</span>
          </button>
        </div>

        {/* Center Section */}
        <div className="flex text-center items-center">
          <img src={StarterIcon} alt="image" />
          <h1 className="text-lg sm:text-xl font-medium text-black">
            Starter Project
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center flex-1 justify-end space-x-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <button className="">
            <img src={Avatar} alt="avatar" />
          </button>
          <button className="px-3 sm:px-4 py-2 bg-primary font-medium text-md text-white rounded-xl hover:bg-blue-700">
            Export
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Thumbnails */}
        <div className="hidden lg:block w-[7.625rem] bg-disabled p-2 flex-shrink-0 border-r">
          <div className="space-y-2">
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
            <button className="w-full shadow-sm border border-muted-secondary bg-white rounded-lg flex items-center justify-center p-2 hover:bg-muted ">
              <Plus className="text-muted-primary " size={15} />
            </button>
          </div>
        </div>

        {/* Center Content with Timeline Below */}
        <div className="flex-1 flex flex-col">
          {/* Main Editor */}
          {/* editor bar start */}
          <div className="flex flex-wrap gap-1 justify-center items-center px-1.5 bg-white border-b border-zinc-100">
            {toolbarItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <ToolbarItem icon={item.icon} label={item.label} />
                {index < toolbarItems.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </div>
          {/* editor bar end */}
          <div className="flex-1 overflow-hidden">
            <img
              src={MainContent}
              alt="main-content"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Timeline */}
          <div className=" border-t">
            <Player />
          </div>
        </div>

        {/* Right Settings Panel */}
        <div className="hidden lg:flex">
          {/* Settings Panel Content */}
          {isSettingsPanelVisible && (
            <div className="w-80 bg-white border-l border-r border-muted">
              <div className="flex justify-between items-center  mb-4 p-3 border-b border-muted">
                <h2 className="text-lg text-muted-dark font-medium ">Media</h2>
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
              <div className="px-4 ">
                <div className="border-2 bg-disabled border-dashed border-muted rounded-lg p-8 mb-4 text-center">
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
              <div className="flex space-x-6 mb-4 text-sm text-muted-normal font-medium bg-disabled p-4 border border-muted">
                <button className="hover:text-black hover:border hover:bg-white hover:rounded-full hover:px-3 transition-all duration-300 ease-in-out">
                  Images
                </button>
                <button className="hover:text-black hover:border hover:bg-white hover:rounded-full hover:px-3 transition-all duration-300 ease-in-out">
                  Video
                </button>
                <button className="hover:text-black hover:border hover:bg-white hover:rounded-full hover:px-3 transition-all duration-300 ease-in-out">
                  Logo
                </button>
                <button className="hover:text-black hover:border hover:bg-white hover:rounded-full hover:px-3 transition-all duration-300 ease-in-out">
                  Unsplash
                </button>
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
            </div>
          )}

          {/* Right Side Icons */}
          <div className="flex flex-col space-y-2 p-2 bg-disabled">
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
  );
};

export default App;
