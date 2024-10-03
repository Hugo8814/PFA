import { useSelector } from "react-redux";
import SubTitle from "../../ui/SubTitle";
import BudgetChart from "../budgets/BudgetChart";

import { getBugetData, getBugetTotal } from "./overviewSlice";
import BugetPots from "./BugetPots";
import { formatCurrency } from "../../utils/helpers";

function BugetsWiget() {
  const budgetData = useSelector(getBugetData);
  const budgetTotal = useSelector(getBugetTotal);

  const data = budgetData.map((item) => ({
    name: item.category, // Label for the pie slice
    value: item.maximum, // Value for the pie slice
    theme: item.theme, // Color for the pie slice
  }));
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
          <BudgetChart data={data} />
        </div>

        <div className=" grid grid-cols-1 gird-rows-4 gap-4">
          <BugetPots data={data} budget={true} />
        </div>
      </div>
    </div>
  );
}

export default BugetsWiget;
