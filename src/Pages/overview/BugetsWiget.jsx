import SubTitle from "../../ui/SubTitle";
import BudgetChart from "../budgets/BudgetChart";

import { getBugetTotal } from "./overviewSlice";
import BugetPots from "./BugetPots";
import { formatCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { getBudgetData } from "../budgets/budgetSlice";
import { useEffect, useMemo } from "react";

function BugetsWiget() {
  const budgetData = useSelector(getBudgetData);
  const budgetTotal = useSelector(getBugetTotal);
  console.log(budgetData);

  useEffect(() => {
    console.log("Budget data changed", budgetData);
  }, [budgetData]); // Triggered whenever budgetData changes

  const chartData = useMemo(() => {
    return budgetData.map((item) => ({
      name: item.category, // Label for the pie slice
      value: item.maximum, // Value for the pie slice
      theme: item.theme, // Color for the pie slice
    }));
  }, [budgetData]);

  return (
    <div className="flex bg-white rounded-md h-content w-full flex-col p-10">
      <SubTitle to="/budgets">Budgets</SubTitle>

      <div className="flex gap-6 justify-between ">
        <div className="ml-[20%] relative text-center">
          <div className="text-6xl font-bold absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
            $338
            <p className="text-gray-500 text-lg">
              of {formatCurrency(budgetTotal)} limit
            </p>
          </div>
          <BudgetChart data={chartData} />
        </div>

        <div className=" grid grid-cols-1 gird-rows-4 gap-4">
          <BugetPots data={budgetData} budget={true} />
        </div>
      </div>
    </div>
  );
}

export default BugetsWiget;
