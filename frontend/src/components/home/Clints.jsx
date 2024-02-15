import { Link } from "react-router-dom";
import CustomTitleHome from "../utility/CustomTitleHome";
import { useTranslation } from "react-i18next";

const Clints = () => {
  const { t } = useTranslation();

  const dataClints = [
    {
      img: "../../src/assets/logo.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/brands-01.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/brands-03.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/brands-02.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/logo.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/brands-01.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/logo.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/brands-02.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/brands-03.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/logo.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/brands-02.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/brands-03.png",
      link: "https://kbs.sa/our-clients-ar",
    },
    {
      img: "../../src/assets/brands-01.png",
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
