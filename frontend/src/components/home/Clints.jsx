import { Link } from "react-router-dom";
import CustomTitleHome from "../utility/CustomTitleHome";
import { useTranslation } from "react-i18next";
import imgBarnds01 from "../../assets/logo.png";
import imgBarnds02 from "../../assets/brands-01.png";
import imgBarnds03 from "../../assets/brands-02.png";
import imgBarnds04 from "../../assets/brands-03.png";

const Clints = () => {
  const { t } = useTranslation();

  const dataClints = [
    {
      img: imgBarnds01,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds02,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds03,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds04,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds01,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds02,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds04,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds03,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds04,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds03,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds02,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds03,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds01,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds02,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds04,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds01,
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: imgBarnds04,
      link: "https://kbs.sa/our-clients-ar",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container">
        <CustomTitleHome title={t("clints.title")} />
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-1 mt-5 w-full md:w-2/3 mx-auto ">
          {dataClints.map((item, i) => (
            <Link
              to={item.link}
              target="_blank"
              key={i}
              className="p-3 py-5 flex items-center justify-center text-center style-hover-shadow transition-all duration-200"
            >
              <img src={item.img} alt="clint" className=" object-fill w-24" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clints;
