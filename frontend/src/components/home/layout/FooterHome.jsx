/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// import imgFooter from "../../../assets/img-footer.png";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-white.png";
import { dataMedia } from "../ContactUs";
import imgLangAr from "../../../assets/flag-ar.png";
import imgLangEn from "../../../assets/flag-en.png";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { BiSolidDownArrow } from "react-icons/bi";
import ServicesData from "../../services/ServicesData";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const FooterHome = () => {
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

  const currentYear = new Date().getFullYear();
  const LINKS = [
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
      title: t("navbar.contact_us"),
      path: "/contact-us",
      isLink: true,
    },
    {
      title: t("navbar.services"),
      path: null,
      isLink: false,
      dropdwon: dropdownServices(),
    },
    {
      title: t("navbar.langs.title"),
      path: null,
      isLink: false,
      dropdwon: dropdownLanguages(),
    },
  ];
  return (
    <>
      <footer
        className={`${
          i18n.dir() === "rtl" ? "bg-gradient-to-r" : "bg-gradient-to-l"
        } from-gold via-primaryColor/80 to-primaryColor p-5  md:pt-10`}
      >
        <div className="container">
          <div className="relative mx-auto w-full   text-white">
            <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
              <div className="flex flex-col  items-center gap-5">
                <Link to={"/"} style={{ width: "90px" }} className="bg p-1">
                  <img src={logo} className="object-cover" alt="logo" />
                </Link>
              </div>
              <ul>
                {LINKS.map(
                  (item, i) =>
                    item.isLink && (
                      <li key={i}>
                        <div className="py-1.5 text-gray-200 transition hover:text-gray-400 cursor-pointer select-none ">
                          <Link to={item.path}>{item.title}</Link>
                        </div>
                      </li>
                    )
                )}
              </ul>
              <ul>
                {LINKS.map((item, i) =>
                  item.isLink ? null : (
                    <Menu key={i} placement="bottom-start">
                      <MenuHandler>
                        <li className="py-1.5 flex items-center gap-1 text-gray-200 transition hover:text-gray-400 cursor-pointer select-none ">
                          <span>{item.title}</span>
                          <BiSolidDownArrow size={12} />
                        </li>
                      </MenuHandler>
                      {item.dropdwon}
                    </Menu>
                  )
                )}
              </ul>
              <div>
                <div className="underline">{t("footer.titleMedia")}</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {dataMedia.map((item, i) =>
                    item.isMedia ? (
                      <Link
                        key={i}
                        className={` flex justify-center items-center rounded-full transition duration-300  border-[3px] border-white text-white hover:bg-white/80 hover:text-primaryColor`}
                        to={item.link}
                        style={{ fontSize: 18, width: 42, height: 42 }}
                        target="_blanck"
                      >
                        {item.icon}
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-100/10 my-5" />{" "}
        <p className="text-sm text-center   text-gray-100">
          {t("footer.copyRight")} {currentYear}
        </p>
      </footer>

      {/* <footer className="relative w-full bg-gradient-to-r bg-primaryColor/90 p-5  md:p-10 ">
        <img
          src={imgFooter}
          alt=""
          className="absolute left-0 top-0  w-2/3 h-full"
        />
        <div className="container relative   text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col  items-center gap-5">
              <div className="text-2xl font-bold  ">سراط</div>
              <Link
                to={"/"}
                style={{ width: "100px" }}
                className="bg-light p-1"
              >
                <img src={logo} className="object-cdover" alt="logo" />
              </Link>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-4">
                {LINKS.map(({ title, items }) => (
                  <ul key={title}>
                    {items.map((link) => (
                      <li key={link}>
                        <div className="py-1.5 font-normal transition-colors ">
                          {link}
                        </div>
                      </li>
                    ))}
                  </ul>
                ))}
                <div>
                  <div>تابعنا على</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {dataMedia.map((item, i) =>
                      item.isMedia ? (
                        <Link
                          key={i}
                          className={` flex justify-center items-center rounded-full transition duration-300  border-[3px] border-white text-white hover:bg-white/80 hover:text-primaryColor`}
                          to={item.link}
                          style={{ fontSize: 18, width: 42, height: 42 }}
                          target="_blanck"
                        >
                          {item.icon}
                        </Link>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default FooterHome;
