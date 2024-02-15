/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";

const SidebarSubItem = ({ title, path, icon, iconActive }) => {
  const location = useLocation();
  const url = "/" + location.pathname.split("/").splice(1, 2).join("/");
  return (
    <MenuItem
      component={<Link to={path} />}
      active={url === path ? true : false}
      icon={url === path ? iconActive : icon}
    >
      <div
        className="fw-bold"
        title={title}
        style={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: "12px",
        }}
      >
        {title}
      </div>
    </MenuItem>
  );
};

export default SidebarSubItem;
