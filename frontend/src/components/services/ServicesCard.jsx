import { useTranslation } from "react-i18next";
import CustomButton from "../utility/CustomButton";

/* eslint-disable react/prop-types */
const ServicesCard = ({ props, i }) => {
  const { img, title, desc } = props;
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-5 bg-white rounded-lg p-3 md:p-5">
      {i % 2 === 0 ? (
        <>
          <div className="md:text-right max-md:mt-12 h-full w-full ">
            <img src={img} alt="" className="object-contain" />
          </div>
          <div className=" flex items-start justify-center flex-col order-2">
            <h3 className="text-base sm:text-lg font-semibold leading-normal">
              {title}
            </h3>
            <p className="text-xs sm:text-base font-light leading-relaxed mt-2 text-gray-700">
              {desc}
            </p>
            <div className="mt-4">
              <CustomButton
                title={t("buttons.more")}
                bgColor="var(--gold)"
                path={`/services/view/${i}`}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" flex items-start justify-center flex-col order-2">
            <h3 className="text-base sm:text-lg font-semibold leading-normal">
              {title}
            </h3>
            <p className="text-xs sm:text-base font-light leading-relaxed mt-2 text-gray-700">
              {desc}
            </p>
            <div className="mt-4">
              <CustomButton
                title={t("buttons.more")}
                bgColor="var(--gold)"
                path={`/services/view/${i}`}
              />
            </div>
          </div>
          <div className="md:text-right max-md:mt-12 h-full w-full order-1 md:order-2">
            <img src={img} alt="" className="object-contain" />
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesCard;
