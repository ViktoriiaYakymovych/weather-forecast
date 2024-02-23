import { Circles } from "react-loader-spinner";

const Loader = ({ loading }) => {
  return (
    <Circles
      height="80"
      width="80"
      color="#f5a142"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={loading}
    />
  );
};

export default Loader;
