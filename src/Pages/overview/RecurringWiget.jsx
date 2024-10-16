import { useSelector, useDispatch } from "react-redux";
import SubTitle from "../../ui/SubTitle";
import { useEffect } from "react";

import { formatCurrency } from "../../utils/helpers";

import { getReData, setRecurringData } from "../recurringBills/recurringSlice";

function RecurringWiget() {
  const data = useSelector(getReData);
  const ReData = data.recurring;
  console.log(ReData);
  const dispatch = useDispatch();

  const today = new Date();
  const day = today.getDate();

  useEffect(() => {
    // Initialize amounts
    let computedAmounts = {
      paidBills: 0,
      totalUpcoming: 0,
      dueSoon: 0,
      paid: 0,
      total: 0,
      due: 0,
    };
    let totalBills = 0; // Initialize total

    // Calculate totals based on data
    if (ReData) {
      ReData.forEach((item) => {
        const itemDate = new Date(item.date);
        const billDay = itemDate.getDate();
        const billAmount = item.amount;

        totalBills += billAmount; // Total amount

        // Classify bills
        if (billDay > day + 7) {
          computedAmounts.total += 1;
          computedAmounts.totalUpcoming += billAmount;
        } else if (billDay <= day) {
          computedAmounts.paid += 1;
          computedAmounts.paidBills += billAmount;
        } else {
          computedAmounts.due += 1;
          computedAmounts.dueSoon += billAmount;
        }
      });
    }

    // Dispatch computed amounts and total
    dispatch(
      setRecurringData({
        ...computedAmounts,
        totalBills, // Include total in the dispatched data
      })
    );
  }, [dispatch, ReData, day]);
  const { paidBills, totalUpcoming, dueSoon } = useSelector(
    (state) => state.recurring
  );

  if (!ReData.length) {
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
        <div className="text-2xl font-bold">
          {formatCurrency(Math.abs(paidBills))}
        </div>
      </div>

      <div className="flex justify-between mx-6 p-10 bg-[#F8F4F0]  border-l-4 border-yellow-400 rounded-xl">
        <div className="flex gap-4 items-center  ">
          <p className="text-2xl font-bold">Total Upcoming</p>
        </div>
        <div className="text-2xl font-bold">
          {formatCurrency(Math.abs(totalUpcoming))}
        </div>
      </div>

      <div className="flex justify-between mx-6 p-10 bg-[#F8F4F0]  border-l-4 border-red-500 rounded-xl">
        <div className="flex gap-4 items-center  ">
          <p className="text-2xl font-bold">Due Soon</p>
        </div>
        <div className="text-2xl font-bold">
          {formatCurrency(Math.abs(dueSoon))}
        </div>
      </div>
    </div>
  );
}

export default RecurringWiget;
