import React from "react";
import { NavLink } from "react-router";

function ListItem({ icon: Icon, title, to: href }) {
  return (
    <NavLink
      to={href}
      className={(isActive) => {
        isActive ? "bg-white text-black" : "text-white bg-transparent";
      }}
    >
      <span className="">{title}</span>
      <span>
        <Icon size={20} />
      </span>
    </NavLink>
  );
}

export default ListItem;
