import React from "react";
import ListItem from "./components/ListItem";
import sidebarData from "../../../Data/SIdebarData";
import {
  RiBookOpenLine,
  RiRefreshLine,
  RiSettings2Line,
  RiUserLine,
} from "react-icons/ri";

function SideBar() {
  return (
    <div className="sidebar bg-(--deep-Blue) text-white p-5 h-screen overflow-y-scroll w-78 flex flex-col items-center">
      <ul>
        {sidebarData.map((item) => (
          <ListItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            to={item.to}
          />
        ))}
      </ul>

      <ul className="pt-4 w-full">
        <li className="text-xs my-5">Other Information</li>

        <li className="flex items-center gap-5 text-sm hover:bg-white hover:text-gray-700 p-2 rounded-sm transition-colors cursor-pointer">
          <span className="">
            <RiBookOpenLine />
          </span>
          <span className="">Knowledge Base</span>
        </li>
        <li className="flex items-center gap-5 text-sm hover:bg-white hover:text-gray-700 p-2 rounded-sm transition-colors cursor-pointer">
          <span className="">
            <RiRefreshLine />
          </span>
          <span className="">Product Update</span>
        </li>
      </ul>

      <ul className="pt-4 w-full">
        <li className="text-xs my-5">Settings</li>

        <li className="flex items-center gap-5 text-sm hover:bg-white hover:text-gray-700 p-2 rounded-sm transition-colors cursor-pointer">
          <span className="">
            <RiUserLine />
          </span>
          <span className="">Personal Settings</span>
        </li>
        <li className="flex items-center gap-5 text-sm hover:bg-white hover:text-gray-700 p-2 rounded-sm transition-colors cursor-pointer">
          <span className="">
            <RiSettings2Line />
          </span>
          <span className="">Global Settings</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
