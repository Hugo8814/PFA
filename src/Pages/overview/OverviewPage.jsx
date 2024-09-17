import iconPot from "../../../Temp/assets/images/icon-pot.svg";
import SubTitle from "./SubTitle";

function OverviewPage() {
  return (
    <div className="w-full flex flex-col p-28 gap-12">
      <h1 className="text-6xl font-semibold">Overview</h1>
      <div className="w-full grid grid-cols-3 gap-12">
        <div className="bg-gray-900 text-white rounded-lg w-full h-44 flex flex-col p-8 gap-6">
          <h3 className="text-gray-300 text-2xl ml-2">Current balance</h3>
          <div className="font-bold text-5xl">$4,836.00</div>
        </div>
        <div className="bg-white rounded-lg w-full h-44 flex flex-col p-8 gap-6">
          <h3 className="text-gray-400 text-2xl ml-2">Income</h3>
          <div className="font-bold text-5xl">$3,814.25</div>
        </div>
        <div className="bg-white rounded-lg w-full h-44 flex flex-col p-8 gap-6">
          <h3 className="text-gray-400 text-2xl ml-2">Expense</h3>
          <div className="font-bold text-5xl">$1,700.50</div>
        </div>
      </div>
      <div className="w-full h-full flex gap-8">
        <div className="flex flex-col gap-4 w-full ">
          <div className="flex bg-white rounded-md h-full w-full flex-col p-8 ">
            <SubTitle>Pots</SubTitle>
            <div className="flex  gap-5 ">
              <div className="flex gap-4 bg-  bg-[#F8F4F0] w-full rounded-md p-4">
                <img src={iconPot} alt="money jar icon" className="w-18" />
                <div className="">
                  <div className="text-gray-400">Total Saved</div>
                  <div className="text-6xl font-bold">$0</div>
                </div>
              </div>
              <div className="w-full "></div>
            </div>
          </div>
          <div className="flex bg-white rounded-md h-full">
            <SubTitle>Transactions</SubTitle>
          </div>
        </div>

        <div className="w-full  flex flex-col gap-4">
          <div className="flex bg-white rounded-md h-full w-full">
            <SubTitle>Budgets</SubTitle>
          </div>
          <div className="flex bg-white rounded-md h-full w-full">
            <SubTitle>Recurring Bills</SubTitle>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
