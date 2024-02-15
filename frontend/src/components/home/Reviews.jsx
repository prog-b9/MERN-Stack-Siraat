// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import CustomTitleHome from "../utility/CustomTitleHome";

const Reviews = () => {
  const dataReviews = [
    {
      username: "علي القحطاني",
      desc: `الشركة جميلة بفضل رؤيتها المستقبلية والتزامها بالابتكار. تتميز
          بفريق عمل محترف ومتحمس، حيث يعمل كل فرد على تحقيق أهداف الشركة
          بكفاءة وإبداع.`,
    },
    {
      username: "سعد القحطاني",
      desc: `الشركة جميلة بفضل رؤيتها المستقبلية والتزامها بالابتكار. تتميز
          بفريق عمل محترف ومتحمس، حيث يعمل كل فرد على تحقيق أهداف الشركة
          بكفاءة وإبداع.`,
    },
    {
      username: "مطر القحطاني",
      desc: `الشركة جميلة بفضل رؤيتها المستقبلية والتزامها بالابتكار. تتميز
          بفريق عمل محترف ومتحمس، حيث يعمل كل فرد على تحقيق أهداف الشركة
          بكفاءة وإبداع.`,
    },
    {
      username: "سعود القحطاني",
      desc: `الشركة جميلة بفضل رؤيتها المستقبلية والتزامها بالابتكار. تتميز
          بفريق عمل محترف ومتحمس، حيث يعمل كل فرد على تحقيق أهداف الشركة
          بكفاءة وإبداع.`,
    },
    {
      username: "حليل القحطاني",
      desc: `الشركة جميلة بفضل رؤيتها المستقبلية والتزامها بالابتكار. تتميز
          بفريق عمل محترف ومتحمس، حيث يعمل كل فرد على تحقيق أهداف الشركة
          بكفاءة وإبداع.`,
    },
    {
      username: "خالد القحطاني",
      desc: `الشركة جميلة بفضل رؤيتها المستقبلية والتزامها بالابتكار. تتميز
          بفريق عمل محترف ومتحمس، حيث يعمل كل فرد على تحقيق أهداف الشركة
          بكفاءة وإبداع.`,
    },
  ];

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="container">
        <CustomTitleHome title={"قالوا عنا"} />
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            dynamicBullets: true,
          }}
          grabCursor={true}
          className="my-10"
        >
          <div className="swiper-pagination"></div>
          {dataReviews.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-lg p-6 shadow-sm sm:p-8 cursor-grsab bg-light">
                <div className="flex items-center gap-4">
                  <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex items-center">
                      <FaStar color="var(--yellow)" />
                      <FaStar color="var(--yellow)" />
                      <FaStar color="var(--yellow)" />
                      <FaStar color="var(--yellow)" />
                      <FaStar color="var(--yellow)" />
                    </div>
                    <p className="mt-0.5 text-sm sm:text-base font-bold text-gray-900">
                      {item.username}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-sm font-light leading-relaxed   text-gray-700">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
