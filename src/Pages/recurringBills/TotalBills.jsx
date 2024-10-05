import { useSelector } from "react-redux";
import BillsIcon from "../../../assets/images/icon-recurring-bills.svg";
import { getRecurringTotal } from "../overview/overviewSlice";
import { formatCurrency } from "../../utils/helpers";
function TotalBills() {
  const total = useSelector(getRecurringTotal);
  return (
    <div className="w-[35%] space-y-10">
      <div className="bg-black w-full text-white rounded-xl p-10 space-y-12">
        <img src={BillsIcon} alt="BillsIcon" className="w-16" />
        <p className="text-3xl font-semibold">Total Bills</p>
        <p className="text-6xl font-bold">{formatCurrency(total).slice(1)}</p>
      </div>
      <div className="bg-white p-6">
        <h4 className="text-3xl font-semibold p-4">Summary</h4>
        <div className="flex justify-between p-4 border-t-[1px]">
          <div className="text-xl text-gray-600">Paid Bills</div>
          <div className="text-xl text-gray-900 font-bold">{"4($190.00)"}</div>
        </div>
        <div className="flex justify-between p-4 border-t-[1px]">
          <div className="text-xl text-gray-600">Total Upcoming</div>
          <div className="text-xl text-gray-900 font-bold">{"4($890.00)"}</div>
        </div>
        <div className="flex justify-between p-4 border-t-[1px]">
          <div className="text-xl text-gray-600">Due soon</div>
          <div className="text-xl text-gray-900 font-bold">{"4($190.00)"}</div>
        </div>
      </div>
    </div>
  );
}

export default TotalBills;
