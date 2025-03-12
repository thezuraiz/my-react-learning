import { useNavigate } from "react-router-dom";

const useNavigation = (to) => {
  const nav = useNavigate();
  nav(to);
  return nav;
};

export default useNavigation;
