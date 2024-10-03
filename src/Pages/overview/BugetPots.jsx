import { useSelector } from "react-redux";
import { getBugetData } from "../overview/overviewSlice";

function Pot() {
  const data = useSelector(getBugetData);

  return (
    data &&
    data
      .map((item, index) => (
        <div key={index} className=" w-full flex ">
          <span
            className={`h-full w-2 rounded-xl mr-6 `}
            style={{ backgroundColor: item.theme }} // Apply dynamic hex color here
          ></span>
          <div>
            <p className="text-gray-400 text-xl">{item.category}</p>
            <p className="text-3xl font-bold">${item.maximum}</p>
          </div>
        </div>
      ))
      .slice(0, 4)
  );
}

export default Pot;
