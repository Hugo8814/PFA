import { useSelector } from "react-redux";
import SubTitle from "../../ui/SubTitle";

import { getRecurringData } from "./overviewSlice";

function RecurringWiget() {
  const data = useSelector(getRecurringData); // Get recurring transactions
  console.log(data);

  if (!data.length) {
    // Show a loading or empty state when data is not yet available
    return <div>Loading recurring bills...</div>;
  }
  return (
    <div className="flex bg-white rounded-xl h-auto p-10 w-full flex-col gap-6">
      <SubTitle to="/recurringBills">Recurring Bills</SubTitle>

      <div className="flex justify-between mx-6 p-10 bg-[#F8F4F0]  border-l-4 border-green-600 rounded-xl">
        <div className="flex gap-4 items-center  ">
          <p className="text-2xl font-bold">Paid bills</p>
        </div>
        <div className="text-2xl font-bold">TEMP-DATA</div>
      </div>

      <div className="flex justify-between mx-6 p-10 bg-[#F8F4F0]  border-l-4 border-yellow-400 rounded-xl">
        <div className="flex gap-4 items-center  ">
          <p className="text-2xl font-bold">Total Upcoming</p>
        </div>
        <div className="text-2xl font-bold">TEMP-DATA</div>
      </div>

      <div className="flex justify-between mx-6 p-10 bg-[#F8F4F0]  border-l-4 border-red-500 rounded-xl">
        <div className="flex gap-4 items-center  ">
          <p className="text-2xl font-bold">Due Soon</p>
        </div>
        <div className="text-2xl font-bold">TEMP-DATA</div>
      </div>
    </div>
  );
}

export default RecurringWiget;
