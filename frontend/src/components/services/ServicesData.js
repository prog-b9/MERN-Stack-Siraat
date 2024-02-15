import iconServices01 from "../../assets/icon-services-01.png";
import iconServices02 from "../../assets/icon-services-02.png";
import iconServices03 from "../../assets/icon-services-03.png";
import iconServices04 from "../../assets/icon-services-04.png";
import iconServices05 from "../../assets/icon-services-05.png";
import iconServices06 from "../../assets/icon-services-06.png";
import iconServices07 from "../../assets/icon-services-07.png";
import services02 from "../../assets/img-services-01.jpg";
import services03 from "../../assets/img-services-02.jpg";
import services04 from "../../assets/img-services-03.jpg";
import services05 from "../../assets/img-services-04.jpg";
import { useTranslation } from "react-i18next";
const ServicesData = () => {
  const { t } = useTranslation();
  const dataServices = [
    {
      img: "https://readymadeui.com/team-image.webp",
      icon: iconServices01,
      title: t("services.items.title1"),
      desc: t("services.items.desc1"),
      content: {
        step1: {
          title: t("services.items.content1.step1.title"),
          lists: t("services.items.content1.step1.lists", {
            returnObjects: true,
          }).map((item) => item),
        },
      },
    },
    {
      img: services02,
      icon: iconServices02,
      title: t("services.items.title2"),
      desc: t("services.items.desc2"),
      content: {
        step1: {
          title: t("services.items.content2.step1.title"),
          lists: t("services.items.content2.step1.lists", {
            returnObjects: true,
          }).map((item) => item),
        },
      },
    },
    {
      img: services03,
      icon: iconServices03,
      title: t("services.items.title3"),
      desc: t("services.items.desc3"),
      content: {
        step1: {
          title: t("services.items.content3.step1.title"),
          lists: t("services.items.content3.step1.lists", {
            returnObjects: true,
          }).map((item) => item),
        },
      },
    },
    {
      img: services04,
      icon: iconServices04,
      title: t("services.items.title4"),
      desc: t("services.items.desc4"),
      content: {
        step1: {
          title: t("services.items.content4.step1.title"),
          lists: t("services.items.content4.step1.lists", {
            returnObjects: true,
          }).map((item) => item),
        },
      },
    },
    {
      img: services05,
      icon: iconServices05,
      title: t("services.items.title5"),
      desc: t("services.items.desc5"),
      content: {
        step1: {
          title: t("services.items.content5.step1.title"),
          lists: t("services.items.content5.step1.lists", {
            returnObjects: true,
          }).map((item) => item),
        },
      },
    },
    {
      img: services05,
      icon: iconServices06,
      title: t("services.items.title6"),
      desc: t("services.items.desc6"),
      content: {
        step1: {
          title: t("services.items.content6.step1.title"),
          lists: t("services.items.content6.step1.lists", {
            returnObjects: true,
          }).map((item) => item),
        },
      },
    },
    {
      img: services02,
      icon: iconServices07,
      title: t("services.items.title7"),
      desc: t("services.items.desc7"),
      content: {
        step1: {
          title: t("services.items.content7.step1.title"),
          lists: t("services.items.content7.step1.lists", {
            returnObjects: true,
          }).map((item) => item),
        },
      },
    },
  ];

  return { dataServices };
};

export default ServicesData;
