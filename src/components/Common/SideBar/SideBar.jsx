import React from "react";
import ListItem from "./components/ListItem";
import sidebarData from "../../../Data/SIdebarData";

function SideBar() {
  return (
    <div className="bg-(--deep-Blue) text-white w-50">
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
    </div>
  );
}

export default SideBar;
