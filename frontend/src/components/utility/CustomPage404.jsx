import imageError from "../../assets/img-error-404.png";

// const CustomPage404 = ({ title = "عذرًا، الصفحة غير متاحة !" }) => {
const CustomPage404 = () => {
  return (
    <center className=" h-screen flex justify-center items-center flex-col p-5">
      <div>
        <img src={imageError} width={"60%"} alt="" />
      </div>
      <div>
        <p className="text-xl font-bold text-center my-4">
          عذرًا، الصفحة غير متاحة !
        </p>
        {/* <CustomLink title={"الصفحة الرئيسة"} path={"/"} /> */}
      </div>
    </center>
  );
};

export default CustomPage404;
