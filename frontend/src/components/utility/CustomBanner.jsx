// import CustomButton from "./CustomButton";

/* eslint-disable react/prop-types */
const CustomBanner = ({ title, desc }) => {
  return (
    <div className="bg-gradient-to-r from-gold via-primaryColor/80 to-primaryColor py-20">
      <div className="container  text-center mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-white">{title}</h2>
        <p className="text-lg text-white mb-6">{desc}</p>
        {/* {isBtn ? (
          <center className="mt-10">
            <CustomButton
              title={"طلب الخدمة"}
              size="lg"
              bgColor="var(--gold)"
              path={"/form"}
            />
          </center>
        ) : null} */}
      </div>
    </div>
  );
};

export default CustomBanner;
