import React from "react";
import { NavLink } from "react-router";

function ListItem({ icon: Icon, title, to: href }) {
  return (
    <NavLink
      to={href} // اگر 'to' تعریف نشده باشد، به هش روت می‌شود
      className={({ isActive }) =>
        isActive
          ? "flex items-center p-2 rounded-sm text-sm w-50 h-11 mb-2 bg-white text-gray-700"
          : "flex items-center p-2 rounded-sm text-sm w-50 h-11 mb-2 text-white bg-transparent hover:bg-gray-700 transition-colors"
      }
    >
      <span className="ml-3">{Icon && <Icon size={20} />}</span>
      <span>{title}</span>
    </NavLink>
  );
}

export default ListItem;
