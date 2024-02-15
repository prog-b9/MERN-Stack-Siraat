import { useTranslation } from "react-i18next";
import imgSiraat01 from "../../assets/img-siraat-01.jpg";
import CustomButton from "../utility/CustomButton";
import CustomSubTitleHome from "../utility/CustomSubTitleHome";
import CustomTitleHome from "../utility/CustomTitleHome";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 sm:py-20 ">
      <div className="container">
        {/* About Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  ">
          <div className=" flex items-start justify-center flex-col">
            <CustomTitleHome title={t("about.title")} />
            <CustomSubTitleHome desc={t("about.desc")} />
          </div>
          <div className="rounded-lg w-full lg:w-2/3 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words   w-full mb-6 shadow-lg rounded-lg  ">
              <img src={imgSiraat01} className="w-full h-full rounded-t-lg" />

              <blockquote className="relative  p-5  bg-cream">
                <h4 className="text-2xl sm:text-3xl font-bold text-primaryColor">
                  {t("home.title")}
                </h4>
                <p className="text-sm sm:text-base font-light mt-2 text-primaryColor">
                  {t("about.desc").slice(0, 84) + "..."}
                </p>
                <div className="mt-5 ">
                  <CustomButton title={t("buttons.more")} path={"/about"} />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
