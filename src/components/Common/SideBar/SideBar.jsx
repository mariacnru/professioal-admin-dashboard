import React from "react";
import ListItem from "./components/ListItem";
import sidebarData from "../../../Data/SIdebarData";
import {
  RiBookOpenLine,
  RiRefreshLine,
  RiSettings2Line,
  RiUserLine,
} from "react-icons/ri";

function SideBar({ flag, setFlag }) {
  return (
    <div
      className={`sidebar ${flag ? "right-0" : "-right-70"} transition-all z-20`}
    >
      <ul>
        {sidebarData.map((item) => (
          <ListItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            to={item.to}
            setFlag={setFlag}
          />
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
