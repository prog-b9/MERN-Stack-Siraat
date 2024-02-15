/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useTranslation } from "react-i18next";
import CustomButton from "../utility/CustomButton";

const Landing = ({ refs, scrollToSection }) => {
  const { t } = useTranslation();

  return (
    <section>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh",
        }}
      >
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-[url(./assets/img-landing.png)]">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full    text-center">
              <div className="flex justify-center flex-col">
                <div className="text-white font-semibold text-3xl sm:text-5xl">
                  <h1>{t("home.title")}</h1>
                  {/* سراط */}
                </div>
                <p className="mt-4 text-sm sm:text-base text-gray-300 w-2/3 sm:w-2/4 md:w-2/5 lg:w-2/6 mx-auto">
                  {t("home.desc")}
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-4 text-center">
                  <CustomButton
                    title={t("buttons.start_now")}
                    size="lg"
                    bgColor="var(--gold)"
                    path={"/form"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
