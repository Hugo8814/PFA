import Header from "../../ui/Header";
import Pots from "../pots/pots";
import BudgetChart from "./BudgetChart";

function BudgetsPage() {
  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <Header title="Budgets" btn={true} text="+Add New Budget" />
      <div className="flex gap-8">
        <div className="flex   rounded-2xl flex-col gap-6 justify-between bg-white ">
          <div className="relative text-center px-36  py-14">
            <p className="text-6xl font-bold absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              $338
              <p className="text-gray-500 text-lg">of $845 limit</p>
            </p>
            <BudgetChart />
          </div>
          <h3 className="text-4xl font-bold p-8">Spending Summary</h3>

          <div className=" grid grid-cols gird-rows-4 gap-8 p-6">
            <div className=" p-3 w-full flex  justify-between border-l-4 border-green-600 ">
              <p className="text-gray-800 text-3xl ">Car</p>

              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">$104</p>
                <p className="text-gray-800 text-2xl">of $200</p>
              </div>
            </div>

            <div className=" p-3 w-full flex  justify-between border-l-4 border-red-600 ">
              <p className="text-gray-800 text-3xl ">Netflix</p>

              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">$19,99</p>
                <p className="text-gray-800 text-2xl">of $20</p>
              </div>
            </div>

            <div className=" p-3 w-full flex  justify-between border-l-4 border-green-600 ">
              <p className="text-gray-800 text-3xl ">Shopping</p>

              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">$144</p>
                <p className="text-gray-800 text-2xl">of $200</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-2xl p-10">
          <div className="flex justify-between p-4 w-full">
            <div className="flex gap-4 items-center">
              <span className="bg-blue-800 w-8 h-8 rounded-full"></span>
              <div className="text-4xl font-bold">Car</div>
            </div>
            <button className="text-gray-900 text-4xl font-bold">...</button>
          </div>

          <p className="text-2xl p-4">Maximum of $200.00</p>

          <div className="w-full bg-[#F8F4F0] h-14 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default BudgetsPage;
