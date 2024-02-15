import { useTranslation } from "react-i18next";
import { ContactUsContent } from "../home/ContactUs";
import CustomBanner from "../utility/CustomBanner";
import CustomGoogleMap from "../utility/CustomGoogleMap";
// import imgContact from "../../assets/img-services-02.jpg";

const ContactUsContainer = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CustomBanner
        title={t("contact_us.title")}
        desc={t("contact_us.desc").slice(0, 72)}
      />
      <div className="container my-5">
        <section className="">
          <div>
            <div className="grid lg:grid-cols-4  gap-x-5 sm:p-10">
              {/* img */}
              <div
                className={`hidden md:block m-7 relative bg-[url(./assets/img-services-04.jpg)] bg-center rounded-xl bg-cover w-64 ${
                  i18n.dir() === "rtl" ? "-translate-x-24" : "translate-x-24"
                }  `}
              >
                <div className="absolute w-full h-full bg-black/20 rounded-xl"></div>
              </div>
              <div
                className={`bg-cream p-5 shadow-xl md:col-span-3 text-primaryColor ${
                  i18n.dir() === "rtl"
                    ? "lg:pr-48 xl:pr-36"
                    : "lg:pl-48 xl:pl-36"
                }`}
              >
                {/* Contact Us */}
                <ContactUsContent />
              </div>
            </div>
          </div>
        </section>
        <div className="my-5">
          <CustomGoogleMap width={"100%"} height={"30rem"} />
        </div>
      </div>
    </>
  );
};

export default ContactUsContainer;
