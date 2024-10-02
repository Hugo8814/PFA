import { useSelector } from "react-redux";
import { getPotsData } from "../overview/overviewSlice";

function Pot() {
  const data = useSelector(getPotsData);
  console.log(data);
  return (
    data &&
    data.map((data) => {
      <div className=" w-full flex ">
        <span className=" h-[full] w-2 rounded-xl bg-blue-900 mr-6"></span>
        <div>
          <p className="text-gray-400 text-xl">{data.name}</p>
          <p className="text-3xl font-bold">$38</p>
        </div>
      </div>;
    })
  );
}

export default Pot;
