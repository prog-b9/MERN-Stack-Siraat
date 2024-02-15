/* eslint-disable react-refresh/only-export-components */
import { MdMarkEmailUnread } from "react-icons/md";

import { Link } from "react-router-dom";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import CustomGoogleMap from "../utility/CustomGoogleMap";
import { useTranslation } from "react-i18next";

export const dataMedia = [
  {
    icon: <RiTwitterXFill />,
    title: "siraat_1312",
    link: "https://twitter.com/prog_b9",
    isText: false,
    isMedia: true,
  },
  {
    icon: <FaLinkedin />,
    title: "siraat_12",
    link: "https://www.linkedin.com/in/%D8%A8%D8%A7%D8%B3%D9%84-%D8%A7%D9%84-%D8%B8%D9%81%D8%B1%D9%87-9992a2284/",
    isText: false,
    isMedia: true,
  },
  {
    icon: <MdMarkEmailUnread />,
    title: "almatar@siraat.sa",
    link: "mailto:basilaldhafrah@gmail.com",
    isText: true,
    isMedia: false,
  },
  {
    icon: <FaPhoneAlt />,
    title: "0533332764",
    link: "https://wa.me/966533332764",
    isText: true,
    isMedia: false,
  },
  {
    icon: <IoLogoWhatsapp />,
    title: "966533332764",
    link: "https://wa.me/966533332764",
    isText: false,
    isMedia: false,
  },
  {
    icon: <FaMapLocationDot />,
    title: `Building S4 Roshn Business Front, Airport Road, Ground Floor, Levels 1 & 2, Riyadh Saudi Arabia`,
    link: `https://www.google.com/maps?ll=24.85141,46.735304&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=12982485944752931564`,
    isText: true,
    isMedia: false,
  },
];
const ContactUs = () => {
  const { i18n } = useTranslation();

  return (
    <section className="py-10 sm:py-20 bg-white ">
      <div className="container">
        <div className="grid lg:grid-cols-4  gap-x-5 sm:p-10">
          {/* img */}
          {/* <div className="hidden md:block -translate-x-24 m-7 bg-[url(./assets/img-services-04.jpg)] bg-center bg-cover w-64"></div> */}
          <div
            className={`hidden md:block ${
              i18n.dir() === "rtl" ? "-translate-x-24" : "translate-x-24"
            }  m-7   bg-center bg-cover w-64  `}
          >
            <CustomGoogleMap width={"100%"} height={"100%"} />
          </div>
          <div
            className={`bg-cream p-5 shadow-xl md:col-span-3 text-primaryColor ${
              i18n.dir() === "rtl" ? "lg:pr-48 xl:pr-36" : "lg:pl-48 xl:pl-36"
            }`}
          >
            {/* Contact Us */}
            <ContactUsContent />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;

export const ContactUsContent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className=" text-primaryColor flex flex-col  items-start">
        <PiPhoneCallFill className="text-6xl sm:text-[100px]" />

        <h3 className="text-xl sm:text-2xl mb-2 font-semibold leading-normal">
          {t("contact_us.card_contact.title")}
        </h3>
      </div>
      <ul className=" flex flex-col gap-4 mt-5">
        {dataMedia.map((item, i) =>
          item.isText ? (
            <li key={i} className="flex items-center gap-2">
              <span className="text-xl">{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ) : null
        )}
      </ul>
      <ul className=" mt-5 mb-2">
        <div className="flex flex-wrap">
          {dataMedia.map((item, i) =>
            item.isMedia ? null : (
              <Link
                key={i}
                className={`flex justify-center items-center rounded-full m-1 transition duration-300  border-[3px] border-primaryColor text-primaryColor hover:bg-primaryColor/80 hover:text-white`}
                to={item.link}
                style={{ fontSize: 18, width: 42, height: 42 }}
                target="_blanck"
              >
                {item.icon}
              </Link>
            )
          )}
        </div>
      </ul>
    </div>
  );
};
