import { useTranslation } from "react-i18next";
import CustomBanner from "../utility/CustomBanner";
import ServicesCard from "./ServicesCard";
import ServicesData from "./ServicesData";

const ServicesContainer = () => {
  const { dataServices } = ServicesData();
  const { t } = useTranslation();

  return (
    <>
      <CustomBanner
        title={t("navbar.services_solutions")}
        desc={t("services.desc").slice(0, 80) + "..."}
      />
      <div className="container my-5 mt-20">
        <div className="">
          <div className="grid md:grid-cols-1  gap-5">
            {dataServices.map((item, i) => (
              <ServicesCard key={i} i={i} props={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesContainer;
