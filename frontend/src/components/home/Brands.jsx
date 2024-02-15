// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import services01 from "../../assets/brands-01.png";
import services02 from "../../assets/brands-02.png";
import services03 from "../../assets/brands-03.png";
import CustomTitleHome from "../utility/CustomTitleHome";
import { useTranslation } from "react-i18next";

const Brands = () => {
  const { t } = useTranslation();

  const dataBrands = [
    {
      img: (
        <img
          src={services01}
          alt="Premium Benefits"
          className=" max-w-full h-24 object-cover"
        />
      ),
      name: "incorporated",
    },
    {
      img: (
        <img
          src={services02}
          alt="Premium Benefits"
          className=" max-w-full h-24 object-cover"
        />
      ),
      name: "بصيرة",
    },
    {
      img: (
        <img
          src={services03}
          alt="Premium Benefits"
          className=" max-w-full h-24 object-cover"
        />
      ),
      name: "trade license company",
    },
  ];

  return (
    <section className="py-10 sm:py-20">
      <div className="container">
        <CustomTitleHome title={t("brands.title")} />
        <div>
          <Swiper
            effect="fade"
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              776: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: dataBrands.length > 4 ? 4 : 2,
              },
            }}
            loop={true}
            simulateTouch={false}
            grabCursor={true}
            allowTouchMove={false}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              stopOnLastSlide: false,
              waitForTransition: true,
            }}
            speed={10000}
            slidesPerView={"auto"}
            modules={[Autoplay, Pagination, Navigation]}
            className="my-10"
          >
            {dataBrands.map((item, i) => {
              return (
                <SwiperSlide
                  className="flex  flex-col items-center justify-between bg-light rounded-lg p-3"
                  key={i}
                >
                  {item.img}
                  <span className="text-xl text-blue-gray-400 text-center w-full mt-5">
                    {item.name}
                  </span>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Brands;
