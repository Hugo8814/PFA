import SubTitle from "./SubTitle";
import breadIcon from "../../../Temp/assets/images/avatars/savory-bites-bistro.jpg";
import BudgetChart from "../budgets/BudgetChart";
import Pots from "../pots/pots";
import Header from "../../ui/Header";
import MoneyTabs from "./MoneyTabs";
import PotWiget from "./PotWiget";
import { useSelector } from "react-redux";

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

          <div className="flex bg-white rounded-xl  flex-col p-8">
            <SubTitle to="/transactions">Transactions</SubTitle>
            <div className="flex justify-between p-6">
              <div className="flex gap-4 items-center ">
                <img src={breadIcon} alt="" className="w-16 rounded-full" />
                <p className="text-2xl font-bold">Name</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-700">
                  +$399.50
                </div>
                <div className="text-gray-500 text-xl">19 Jul 2021</div>
              </div>
            </div>

            <div className="flex justify-between p-6">
              <div className="flex gap-4 items-center ">
                <img src={breadIcon} alt="" className="w-16 rounded-full" />
                <p className="text-2xl font-bold">Name</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-700">
                  +$399.50
                </div>
                <div className="text-gray-500 text-xl">19 Jul 2021</div>
              </div>
            </div>

            <div className="flex justify-between p-6">
              <div className="flex gap-4 items-center ">
                <img src={breadIcon} alt="" className="w-16 rounded-full" />
                <p className="text-2xl font-bold">Name</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-700">
                  +$399.50
                </div>
                <div className="text-gray-500 text-xl">19 Jul 2021</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  flex flex-col gap-4">
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

              <Pots></Pots>
            </div>
          </div>
          <div className="flex bg-white rounded-md h-full w-full flex-col gap-4">
            <SubTitle to="/recurringBills">Recurring Bills</SubTitle>

            <div className="flex justify-between mx-6 p-6 bg-[#F8F4F0]  border-l-4 border-lime-500 rounded-xl">
              <div className="flex gap-4 items-center  ">
                <p className="text-2xl font-bold">Rent</p>
              </div>
              <div className="text-2xl font-bold">$399.50</div>
            </div>

            <div className="flex justify-between mx-6 p-6 bg-[#F8F4F0]  border-l-4 border-blue-500 rounded-xl">
              <div className="flex gap-4 items-center  ">
                <p className="text-2xl font-bold">Due soon</p>
              </div>
              <div className="text-2xl font-bold">$184.58</div>
            </div>

            <div className="flex justify-between mx-6 p-6 bg-[#F8F4F0]  border-l-4 border-red-500 rounded-xl">
              <div className="flex gap-4 items-center  ">
                <p className="text-2xl font-bold">Car Insurance</p>
              </div>
              <div className="text-2xl font-bold">$84.58</div>
            </div>

            <div className="flex justify-between mx-6 p-6 bg-[#F8F4F0]  border-l-4 border-blue-500 rounded-xl">
              <div className="flex gap-4 items-center  ">
                <p className="text-2xl font-bold">Due soon</p>
              </div>
              <div className="text-2xl font-bold">$184.58</div>
            </div>

            <div className="flex justify-between mx-6 p-6 bg-[#F8F4F0]  border-l-4 border-red-500 rounded-xl">
              <div className="flex gap-4 items-center  ">
                <p className="text-2xl font-bold">Car Insurance</p>
              </div>
              <div className="text-2xl font-bold">$84.58</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
