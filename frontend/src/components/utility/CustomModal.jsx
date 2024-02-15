/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import CustomButton from "./CustomButton";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";

const CustomModal = ({
  title,
  content = null,
  openModal,
  setOpenModal,
  titleClose = "إلغاء",
  titleOk = "تأكيد",
  hiddenOk = false,
  hiddenClose = false,
  onclickOk,
  loading,
  classNameContent,
}) => {
  const { i18n } = useTranslation();

  return (
    <Dialog open={openModal} handler={setOpenModal} className="relative">
      <DialogHeader className="flex justify-between flex-wrap">
        <div className="text-base md:text-xl">{title}</div>
        <div
          className={`absolute top-3 ${
            i18n.dir() === "rtl" ? "left-3" : "right-3"
          } `}
        >
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={setOpenModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
      </DialogHeader>
      <DialogBody>
        <div className={classNameContent}>{content}</div>
        <div className="flex items-center justify-between mt-4">
          {/* empty */}
          <div></div>
          <div className="flex">
            {hiddenClose ? null : (
              <CustomButton
                title={titleClose}
                onclick={() =>
                  setTimeout(() => {
                    setOpenModal(false);
                  }, 200)
                }
                className={"px-4"}
                bgColor="var(--red)"
              />
            )}
            <div className="mx-1"></div>
            {hiddenOk ? null : loading ? (
              <CustomButton
                title={titleOk}
                isLoading
                className={"px-4"}
                bgColor={"var(--primary-color)"}
              />
            ) : (
              <CustomButton
                title={titleOk}
                onclick={onclickOk}
                className={"px-4"}
                bgColor={"var(--primary-color)"}
              />
            )}
          </div>
        </div>
      </DialogBody>
    </Dialog>
    // <Modal
    //   title={title}
    //   centered
    //   open={openModal}
    //   footer={footerBtns}
    //   onCancel={() =>
    //     setTimeout(() => {
    //       setOpenModal(false);
    //     }, 200)
    //   }
    //   styles={{
    //     content: {
    //       // background: themeMode === "dark" ? "var(--dark-two)" : "",
    //     },
    //     header: {
    //       color: "#fff !important",
    //     },
    //     body: {
    //       color: "#fff !important",
    //     },
    //     mask: {
    //       backdropFilter: "blur(20px)",
    //       overflowY: "hidden",
    //       maxWidth: "200px !important",
    //     },
    //   }}
    // >
    //   <div
    //     className={"p-2"}
    //     // className={`${content === null ? "p-3" : "p-3"}`}
    //   >
    //     {content}
    //   </div>
    // </Modal>
  );
};

export default CustomModal;
