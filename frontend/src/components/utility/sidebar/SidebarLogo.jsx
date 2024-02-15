import logo from "../../../assets/logo.png";

const SidebarLogo = () => {
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="w-full flex justify-center items-center p-2 mx-auto"
    >
      <img src={logo} alt="logo" style={{ maxWidth: "100%", height: "100%" }} />
    </div>
  );
};

export default SidebarLogo;
