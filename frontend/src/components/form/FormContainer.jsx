import { MdCloudUpload } from "react-icons/md";
import CustomInput from "../utility/CustomInput";
import CustomTextArea from "../utility/CustomTextArea";
import CustomButton from "../utility/CustomButton";
import CustomBanner from "../utility/CustomBanner";
import { ContactUsContent } from "../home/ContactUs";
import { useTranslation } from "react-i18next";

const FormContainer = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CustomBanner title={t("form.title")} desc={t("form.desc")} />
      <div className="container mt-5 lg:mt-20">
        <div className="grid lg:grid-cols-3  gap-x-5 sm:p-10 ">
          <div
            className={`p-5 lg:p-10  style-shadow lg:col-span-2 rounded-xl bg-white ${
              i18n.dir() === "rtl" ? "lg:pl-48 xl:pl-56" : "lg:pr-48 xl:pr-56"
            }  `}
          >
            {/* Form */}
            <FormContainerContact />
          </div>
          {/* img */}
          <div
            className={`my-5 lg:my-0 lg:m-7 w-full lg:w-[500px] lg:-translate-y-20 ${
              i18n.dir() === "rtl" ? "lg:translate-x-52" : " lg:-translate-x-52"
            }  `}
          >
            <div className="bg-cream p-5 shadow-xl">
              <ContactUsContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContainer;

export const FormContainerContact = () => {
  const { t } = useTranslation();

  return (
    <form action="" className=" space-y-4 w-full ">
      <h3 className="text-2xl sm:text-3xl font-semibold leading-normal  mb-10 text-primaryColor">
        {t("form.title")}
      </h3>
      <CustomInput
        label={t("form.inputs.name")}
        placeholder={t("form.inputs.name")}
      />
      <CustomInput
        label={t("form.inputs.phone")}
        placeholder={t("form.inputs.phone")}
      />
      <CustomInput
        label={t("form.inputs.email")}
        placeholder={t("form.inputs.email")}
      />
      <CustomInput
        label={t("form.inputs.commercial_registration_number")}
        placeholder={t("form.inputs.commercial_registration_number")}
      />
      <div className="my-2">
        <label className="block  text-sm  font-bold mb-3">
          {t("form.inputs.commercial_registration_file")}
        </label>

        <label
          htmlFor="uploadFile1"
          className="bg-gold hover:bg-gold/80 text-white text-sm px-4 py-2.5 outline-none rounded-lg w-max cursor-pointer flex items-center gap-3"
        >
          <span>{t("buttons.upload_file")}</span>
          <span>
            <MdCloudUpload />
          </span>
          <input type="file" id="uploadFile1" className="hidden" />
        </label>
      </div>
      <CustomTextArea
        label={t("form.inputs.message")}
        placeholder={t("form.inputs.message")}
      />
      <CustomButton title={t("buttons.send")} bgColor="var(--gold)" />
    </form>
  );
};
