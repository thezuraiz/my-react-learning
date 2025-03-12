import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useZutandStore from "../store/zutandStore";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ Component }) => {
  let nav = useNavigate();
  const user = useZutandStore((state) => state.user);
  useEffect(() => {
    console.log("user: ", user);
    if (!user) {
      console.log("User not found: redirecting to login");
      nav("/login");
    }
  });
  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
