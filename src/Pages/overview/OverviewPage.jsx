import Header from "../../ui/Header";
import MoneyTabs from "./MoneyTabs";
import PotWiget from "./PotWiget";
import { useSelector } from "react-redux";
import TransactionWiget from "./TransactionWiget";
import BugetsWiget from "./BugetsWiget";
import RecurringWiget from "./RecurringWiget";

function OverviewPage() {
  const { current, income, expenses } = useSelector(
    (state) => state.overview.data.balance
  );

  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <Header title="Overview" />
      <MoneyTabs current={current} income={income} expenses={expenses} />

      <div className="w-full h-full flex gap-8">
        <div className="flex flex-col gap-4 w-full ">
          <PotWiget />
          <TransactionWiget />
        </div>

        <div className="w-full  flex flex-col gap-4">
          <BugetsWiget />
          <RecurringWiget />
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
