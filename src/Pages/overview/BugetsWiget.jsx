import BudgetChart from "../budgets/BudgetChart";
import Pots from "../pots/pots";
import SubTitle from "./SubTitle";

function BugetsWiget() {
  return (
    <div className="flex bg-white rounded-md h-full w-full flex-col p-10">
      <SubTitle to="/budgets">Budgets</SubTitle>

      <div className="flex gap-6 justify-between ">
        <div className="ml-[20%] relative text-center">
          <div className="text-6xl font-bold absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
            $338
            <p className="text-gray-500 text-lg">of $845 limit</p>
          </div>
          <BudgetChart />
        </div>

        <Pots />
      </div>
    </div>
  );
}

export default BugetsWiget;
