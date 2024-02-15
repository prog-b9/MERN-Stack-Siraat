/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// import { Menu, Sidebar } from "react-pro-sidebar";
// import DateAndDay from "../../utility/sidebar/DateAndDay";
// import SidebarItemHome from "../../utility/sidebar/SidebarItemHome";
// import SidebarLogoHome from "../../utility/sidebar/SidebarLogoHome";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import {
//   MenuList,
//   MenuItem,
//   MenuHandler,
//   Menu as Mmed,
// } from "@material-tailwind/react";
// import ServicesData from "../../services/ServicesData";
// import imgLangAr from "../../../assets/flag-ar.png";
// import imgLangEn from "../../../assets/flag-en.png";
// import { useEffect, useState } from "react";
// import { BiSolidDownArrow } from "react-icons/bi";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { IoCloseSharp } from "react-icons/io5";

const SidebarHome = () => {
  // // const location = useLocation();
  // const { t, i18n } = useTranslation();
  // const { dataServices } = ServicesData();
  // const dataLanguages = [
  //   {
  //     title: t("navbar.langs.ar"),
  //     flag: <img src={imgLangAr} className="w-5" />,
  //     code: "ar",
  //   },
  //   {
  //     title: t("navbar.langs.en"),
  //     flag: <img src={imgLangEn} className="w-5" />,
  //     code: "en",
  //   },
  // ];
  // const handleChangeLanguage = (lang) => {
  //   i18n.changeLanguage(lang);

  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 300);
  // };

  // useEffect(() => {
  //   document.body.dir = i18n.dir();
  // }, [i18n.language]);
  // const dropdownLanguages = () => {
  //   return (
  //     <MenuList>
  //       {dataLanguages.map((item, i) => (
  //         <div key={i}>
  //           <MenuItem
  //             className={`flex items-center justify-between gap-2 ${
  //               item.code === i18n.language || i18n.language === null
  //                 ? "bg-gold text-white"
  //                 : ""
  //             }`}
  //             onClick={() => handleChangeLanguage(item.code)}
  //           >
  //             <div>{item.title}</div>
  //             <div>{item.flag}</div>
  //           </MenuItem>
  //         </div>
  //       ))}
  //     </MenuList>
  //   );
  // };
  // const dropdownServices = () => {
  //   return (
  //     <MenuList style={{ zIndex: 100000 }}>
  //       {dataServices.map((item, i) => (
  //         <Link key={i} to={`/services/view/${i}`}>
  //           <MenuItem className="flex items-center gap-2">
  //             <div>{item.title}</div>
  //           </MenuItem>
  //         </Link>
  //       ))}
  //     </MenuList>
  //   );
  // };

  // const headerItem = [
  //   // {
  //   //   title: "الرئيسية",
  //   //   path: "/",
  //   //   isLink: true,
  //   // },
  //   // {
  //   //   title: `من نحن ؟`,
  //   //   path: "/about",
  //   //   isLink: true,
  //   // },
  //   // {
  //   //   title: "الخدمات والحلول",
  //   //   path: "/services",
  //   //   isLink: true,
  //   // },
  //   // {
  //   //   title: "تواصل معنا",
  //   //   path: () => scrollToSection(refs[3]),
  //   //   isLink: location.pathname === "/" ? false : true,
  //   // },
  //   {
  //     title: t("navbar.home"),
  //     path: "/",
  //     isLink: true,
  //   },
  //   {
  //     title: t("navbar.about"),
  //     path: "/about",
  //     isLink: true,
  //   },
  //   {
  //     title: t("navbar.services_solutions"),
  //     path: "/services",
  //     isLink: true,
  //   },
  //   {
  //     title: t("navbar.contact_us"),
  //     path: "/contact-us",
  //     isLink: true,
  //   },
  //   {
  //     title: t("navbar.services"),
  //     path: null,
  //     isLink: false,
  //     dropdwon: dropdownServices(),
  //   },
  // ];

  return (
    <>
      {/* <Sidebar
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
            className="bg-red-400 h-screen"
          >
            <SidebarLogoHome />
            {headerItem.map((item, i) =>
              item.isLink ? (
                <SidebarItemHome
                  key={i}
                  title={item.title}
                  // icon={<PieChartOutlined />}
                  // iconActive={<PieChartFilled />}
                  onClick={item.isLink ? null : item.path}
                  path={item.isLink ? item.path : null}
                />
              ) : (
                <Mmed key={i} placement="bottom-start">
                  <MenuHandler>
                    <li className="m-2  flex items-center gap-1    text-gray-600 transition hover:text-gray-900 cursor-pointer select-none ">
                      <span>{item.title}</span>
                      <BiSolidDownArrow size={12} />
                    </li>
                  </MenuHandler>
                  {item.dropdwon}
                </Mmed>
              )
            )}
            <Mmed placement="bottom-start">
              <MenuHandler>
                <li className="m-2 flex items-center gap-1 text-base  text-gray-600 transition hover:text-gray-900 cursor-pointer select-none ">
                  <span>{t("navbar.langs.title")}</span>
                  <BiSolidDownArrow size={12} />
                </li>
              </MenuHandler>
              {dropdownLanguages()}
            </Mmed>
          </Menu>

          <div className="my-3">
            <DateAndDay />
          </div>
        </div>
      </Sidebar> */}
      {/* {headerItem.map((item, i) =>
        item.isLink ? (
          <li
            className="m-2 hidden md:block text-gray-600 transition hover:text-gray-900 cursor-pointer select-none"
            key={i}
          >
            {item.isLink ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <div onClick={item.path} type="button">
                {item.title}
              </div>
            )}
          </li>
        ) : (
          <Mmed key={i} placement="bottom-start">
            <MenuHandler>
              <li className="m-2 z-50 flex items-center gap-1 text-gray-600 transition hover:text-gray-900 cursor-pointer select-none ">
                <span>{item.title}</span>
                <BiSolidDownArrow size={12} />
              </li>
            </MenuHandler>
            {item.dropdwon}
          </Mmed>
        )
      )} */}
    </>
  );
};

export default SidebarHome;
