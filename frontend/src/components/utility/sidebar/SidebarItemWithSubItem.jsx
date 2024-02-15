/* eslint-disable react/prop-types */
import { SubMenu } from "react-pro-sidebar";
const SidebarItemWithSubItem = ({ title, icon, item }) => {
  return (
    <SubMenu
      style={{ width: 230 }}
      label={
        <div title={title} className="fw-bold" style={{ fontSize: "14px" }}>
          {title}
        </div>
      }
      icon={icon}
    >
      <div> {item}</div>
    </SubMenu>
  );
};

export default SidebarItemWithSubItem;
