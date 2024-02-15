/* eslint-disable react/prop-types */
import { Menu, Sidebar } from "react-pro-sidebar";
import DateAndDay from "../../utility/sidebar/DateAndDay";
import SidebarItemHome from "../../utility/sidebar/SidebarItemHome";
import SidebarLogoHome from "../../utility/sidebar/SidebarLogoHome";
import { useLocation } from "react-router-dom";
// import { PieChartOutlined, PieChartFilled } from "@ant-design/icons";

const SidebarHome = ({ refs, scrollToSection }) => {
  const location = useLocation();
  const headerItem = [
    {
      title: "الرئيسية",
      path: "/",
      isLink: true,
    },
    {
      title: `من نحن ؟`,
      path: "/about",
      isLink: true,
    },
    {
      title: "الخدمات والحلول",
      path: "/services",
      isLink: true,
    },
    {
      title: "تواصل معنا",
      path: () => scrollToSection(refs[3]),
      isLink: location.pathname === "/" ? false : true,
    },
  ];
  return (
    <Sidebar
      rtl={true}
      className="border-0"
      rootStyles={{
        position: "fixed",
        height: "100%",
        overflowY: "auto !important",
        Zndex: 3,
        top: 0,
        userSelect: "none !important",
        border: "0 !important",
        width: "230px",
        background: "#fff",
      }}
      // backgroundColor={themeMode === "dark" ? "var(--dark-two)" : "#fff"}
      width="230"
      style={{
        boxShadow: "10px 10px 10px rgba(0,0,0,1) !important",
      }}
    >
      <div className=" h-screen flex justify-between flex-col ">
        <Menu
        // menuItemStyles={{
        //   button: ({ active }) => {
        //     return {
        //       color: active ? "#fff" : "#000",
        //       backgroundColor: active ? "var(--primary-color)" : undefined,
        //     };
        //   },
        // }}
        >
          <SidebarLogoHome />
          {headerItem.map((item, i) => (
            <SidebarItemHome
              key={i}
              title={item.title}
              // icon={<PieChartOutlined />}
              // iconActive={<PieChartFilled />}
              onClick={item.isLink ? null : item.path}
              path={item.isLink ? item.path : null}
            />
          ))}
        </Menu>
        <div className="my-3">
          <DateAndDay />
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarHome;
