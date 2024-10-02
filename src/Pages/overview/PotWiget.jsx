import SubTitle from "./SubTitle";
import iconPot from "../../../Temp/assets/images/icon-pot.svg";
import { useSelector } from "react-redux";
import { getPotsData } from "./overviewSlice";
import Pot from "../pots/Pot";

function PotWiget() {
  const data = useSelector(getPotsData);

  return (
    <div className="flex bg-white rounded-xl  w-full flex-col p-8 ">
      <SubTitle to="/pots">Pots</SubTitle>
      <div className="flex  gap-5 ">
        <div className="flex gap-6 bg-  bg-[#F8F4F0] w-[85%] rounded-xl p-8">
          <img src={iconPot} alt="money jar icon" className="w-14" />
          <div className="space-y-4">
            <div className="text-gray-400">Total Saved</div>
            <div className="text-6xl font-bold">$0</div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gird-rows-2 gap-4">
          <div className=" w-full flex ">
            <span className=" h-[full] w-2 rounded-xl bg-green-700 mr-6"></span>
            <div>
              <p className="text-gray-400 text-xl">car</p>
              <p className="text-3xl font-bold">$104</p>
            </div>
          </div>
          <Pot />

          <div className=" w-full flex ">
            <span className=" h-[full] w-2 rounded-xl bg-yellow-300 mr-6"></span>
            <div>
              <p className="text-gray-400 text-xl">car</p>
              <p className="text-3xl font-bold">$49</p>
            </div>
          </div>
          <div className=" w-full flex ">
            <span className=" h-[full] w-2 rounded-xl bg-red-700 mr-6"></span>
            <div>
              <p className="text-gray-400 text-xl">car</p>
              <p className="text-3xl font-bold">$468</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotWiget;
