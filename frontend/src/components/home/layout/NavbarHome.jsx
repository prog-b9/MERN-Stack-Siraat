/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import logo from "../../../assets/logo.png";
import imgLangAr from "../../../assets/flag-ar.png";
import imgLangEn from "../../../assets/flag-en.png";
// import Drawer from "@mui/material/Drawer";
import SidebarHome from "./SidebarHome";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Drawer,
} from "@material-tailwind/react";
import { BiSolidDownArrow } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import ServicesData from "../../services/ServicesData";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoCloseSharp } from "react-icons/io5";
const NavbarHome = ({ refs, scrollToSection }) => {
  const location = useLocation();
  const { dataServices } = ServicesData();
  // for language
  const { t, i18n } = useTranslation();

  const dataLanguages = [
    {
      title: t("navbar.langs.ar"),
      flag: imgLangAr,
      code: "ar",
    },
    {
      title: t("navbar.langs.en"),
      flag: imgLangEn,
      code: "en",
    },
  ];

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);

    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.language]);

  const dropdownLanguages = () => {
    return (
      <MenuList>
        {dataLanguages.map((item, i) => (
          <div key={i}>
            <MenuItem
              className={`flex items-center justify-between gap-2 ${
                item.code === i18n.language || i18n.language === null
                  ? "bg-gold text-white"
                  : ""
              }`}
              onClick={() => handleChangeLanguage(item.code)}
            >
              <div>{item.title}</div>
              <div>
                <img src={item.flag} className="w-5" />
              </div>
            </MenuItem>
          </div>
        ))}
      </MenuList>
    );
  };
  // console.log(dataServices);
  const dropdownServices = () => {
    return (
      <MenuList>
        {dataServices.map((item, i) => (
          <Link key={i} to={`/services/view/${i}`}>
            <MenuItem className="flex items-center gap-2">
              <div>{item.title}</div>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    );
  };

  const headerItem = [
    {
      title: t("navbar.home"),
      path: "/",
      isLink: true,
    },
    {
      title: t("navbar.about"),
      path: "/about",
      isLink: true,
    },
    {
      title: t("navbar.services_solutions"),
      path: "/services",
      isLink: true,
    },
    {
      title: t("navbar.services"),
      path: null,
      isLink: false,
      dropdwon: dropdownServices(),
    },
    {
      title: t("navbar.contact_us"),
      path: "/contact-us",
      isLink: true,
    },
  ];

  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link to={"/"} style={{ width: "75px" }}>
          <img src={logo} className="object-cdover" alt="logo" />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {headerItem.map((item, i) =>
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
                  <Menu key={i} placement="bottom-start">
                    <MenuHandler>
                      <li className="m-2 hidden md:flex items-center gap-1    text-gray-600 transition hover:text-gray-900 cursor-pointer select-none ">
                        <span>{item.title}</span>
                        <BiSolidDownArrow size={12} />
                      </li>
                    </MenuHandler>
                    {item.dropdwon}
                  </Menu>
                )
              )}
              {/* <Menu placement="bottom-start">
                <MenuHandler>
 
                  <li className="m-2 hidden md:flex items-center gap-1 text-base  text-gray-600 transition hover:text-gray-900 cursor-pointer select-none ">
                    <span>الخدمات</span>
                    <BiSolidDownArrow size={12} />
                  </li>
                </MenuHandler>
                <MenuList>
                  {dataServices.map((item, i) => (
                    <Link key={i} to={`/services/view/${i}`}>
                      <MenuItem className="flex items-center gap-2">
                        <div>{item.title}</div>
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </Menu> */}
            </ul>
          </nav>
          <Menu placement="bottom-start">
            <MenuHandler>
              <li className="m-2 hidden md:flex items-center gap-1 text-base  text-gray-600 transition hover:text-gray-900 cursor-pointer select-none ">
                <span>{t("navbar.langs.title")}</span>
                <BiSolidDownArrow size={12} />
              </li>
            </MenuHandler>
            {dropdownLanguages()}
          </Menu>

          {/* <div className="select-none cursor-pointer" onClick={handleLanguage}>
            {language === "ar" ? "ar" : "en"}
          </div> */}

          <div className="block md:hidden">
            <div
              className="border border-gray-100  rounded-full"
              style={{ color: "var(--primary-color)" }}
            >
              <Hamburger
                toggled={openNav}
                toggle={() => setOpenNav(!openNav)}
                size={24}
              />
            </div>
          </div>
        </div>
      </div>

      <Navbar className="p-0 m-0">
        <Collapse open={openNav}>
          <ul className="p-5 my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {headerItem.map((item, i) =>
              item.isLink ? (
                <li
                  className="m-2 block text-gray-600 transition hover:text-gray-900 cursor-pointer select-none"
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
                <Menu key={i} placement="bottom-start">
                  <MenuHandler>
                    <li className="m-2 flex items-center gap-1    text-gray-600 transition hover:text-gray-900 cursor-pointer select-none ">
                      <span>{item.title}</span>
                      <BiSolidDownArrow size={12} />
                    </li>
                  </MenuHandler>
                  {item.dropdwon}
                </Menu>
              )
            )}
            <Menu placement="bottom-start">
              <MenuHandler>
                <li className="m-2 flex items-center gap-1 text-base  text-gray-600 transition hover:text-gray-900 cursor-pointer select-none ">
                  <span>{t("navbar.langs.title")}</span>
                  <BiSolidDownArrow size={12} />
                </li>
              </MenuHandler>
              {dropdownLanguages()}
            </Menu>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default NavbarHome;
