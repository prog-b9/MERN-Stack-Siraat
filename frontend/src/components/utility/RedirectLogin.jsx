/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RedirectLogin = ({ children }) => {
  const token = useSelector((state) => state.auth.isAuthenticated);
  if (!token.token) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
export default RedirectLogin;
