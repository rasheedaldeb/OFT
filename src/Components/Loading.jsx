import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#1ABA9E"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
