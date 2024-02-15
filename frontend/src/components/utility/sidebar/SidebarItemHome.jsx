/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import { MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
// import { MenuItem } from "react-pro-sidebar";

const SidebarItemHome = ({ title, icon, iconActive, path, onClick }) => {
  const location = useLocation();

  const url = "/" + location.pathname.split("/").splice(1, 2).join("/");

  return (
    <MenuItem
      onClick={onClick}
      component={<Link to={path} />}
      style={{ width: 230 }}
      active={url === path ? true : false}
      icon={url === path ? iconActive : icon}
    >
      <div className="fw-bold" title={title} style={{ fontSize: "14px" }}>
        {title}
      </div>
    </MenuItem>
  );
};

export default SidebarItemHome;
