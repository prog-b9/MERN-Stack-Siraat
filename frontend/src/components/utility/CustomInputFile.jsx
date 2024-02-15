/* eslint-disable react/prop-types */
import { RiUploadCloudFill } from "react-icons/ri";

const CustomInputFile = ({
  fileUpload,
  handelFileUpload,
  accept = ".png, .jpg",
  content,
}) => {
  return (
    <div className="flex items-center justify-center">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-dashed rounded-lg cursor-pointer  "
        style={{
          borderWidth: `2px`,
          borderColor: "var(--primary-color)",
          outline: 0,
        }}
      >
        <div className="flex flex-col items-center justify-center pt-5">
          <RiUploadCloudFill style={{ color: "var(--gray)" }} size={"40"} />

          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
            <span className="font-semibold ">
              إضفط هنا لرفع الملف أو الصورة
            </span>
          </p>
          <p className="text-xs text-center text-gray-500 font-bold">
            {fileUpload}
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept={accept}
          onChange={handelFileUpload}
        />
        {content}
      </label>
    </div>
  );
};

export default CustomInputFile;
