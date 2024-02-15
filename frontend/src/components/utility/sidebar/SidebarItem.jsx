/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({
  title,
  icon,
  iconActive,
  path,

  onClick,
}) => {
  const location = useLocation();

  const url = "/" + location.pathname.split("/").splice(1, 2).join("/");

  return (
    <Link
      to={path}
      onClick={onClick}
      className={`flex flex-col items-center justify-center  p-1 m-2 rounded-lg w-[52px] h-[52px]  transition duration-150 cursor-pointer ${
        url === path ? "bg-primaryColor text-white" : "hover:bg-blue-gray-50"
      }`}
    >
      <div>{url === path ? iconActive : icon}</div>
      <div
        className="font-bold mt-1"
        title={title}
        style={{ fontSize: "10px" }}
      >
        {title}
      </div>
    </Link>
  );
};

export default SidebarItem;
