import { useParams } from "react-router-dom";
const UseParamHook = () => {
  const params = useParams();
  console.log(params);
  //   It used to get link parameters
  return <div>UseParamHook: {params.id}</div>;
};

export default UseParamHook;
