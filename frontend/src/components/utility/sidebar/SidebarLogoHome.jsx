import logo from "../../../assets/logo.png";

const SidebarLogoHome = () => {
  return (
    <div
      style={{ width: "100px", height: "100px" }}
      className="w-full flex justify-center items-center p-2 mx-auto"
    >
      <img src={logo} alt="logo" />
    </div>
  );
};

export default SidebarLogoHome;
