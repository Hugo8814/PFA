import iconPot from "../../../Temp/assets/images/icon-pot.svg";
import { useSelector } from "react-redux";
import { getPotsTotal } from "./overviewSlice";
import Pot from "../pots/Pot";
import SubTitle from "../../ui/SubTitle";

function PotWiget() {
  const total = useSelector(getPotsTotal);

  return (
    <div className="flex bg-white rounded-xl  w-full flex-col p-8 ">
      <SubTitle to="/pots">Pots</SubTitle>
      <div className="flex  gap-5 ">
        <div className="flex gap-6 bg-  bg-[#F8F4F0] w-[85%] rounded-xl p-8">
          <img src={iconPot} alt="money jar icon" className="w-14" />
          <div className="space-y-4">
            <div className="text-gray-400">Total Saved</div>
            <div className="text-6xl font-bold">${total}</div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gird-rows-2 gap-4">
          <Pot />
        </div>
      </div>
    </div>
  );
}

export default PotWiget;
