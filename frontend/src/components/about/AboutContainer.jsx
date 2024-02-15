import CustomTimeline from "../utility/CustomTimeline";
import { TbPentagonNumber1 } from "react-icons/tb";
import { TbPentagonNumber2 } from "react-icons/tb";
import { TbPentagonNumber3 } from "react-icons/tb";
import { TbPentagonNumber4 } from "react-icons/tb";
import CustomBanner from "../utility/CustomBanner";
import { useTranslation } from "react-i18next";
const AboutContainer = () => {
  const { t } = useTranslation();

  const dataTimelineAbout = [
    {
      title: t("about.content.title1"),
      desc: t("about.content.desc1"),
      icon: <TbPentagonNumber1 />,
    },

    {
      title: t("about.content.title2"),
      desc: t("about.content.desc2"),
      icon: <TbPentagonNumber2 />,
    },
    {
      title: t("about.content.title3"),
      desc: t("about.content.desc3"),
      icon: <TbPentagonNumber3 />,
    },
    {
      title: t("about.content.title4"),
      desc: t("about.content.desc4"),
      icon: <TbPentagonNumber4 />,
    },
  ];
  return (
    <>
      <CustomBanner
        title={t("about.title")}
        desc={t("about.desc").slice(0, 72)}
      />
      <div className="container my-5">
        <div className="w-full lg:w-2/3 bg-white rounded-lg p-3 md:p-5  mx-auto">
          <CustomTimeline items={dataTimelineAbout} />
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
