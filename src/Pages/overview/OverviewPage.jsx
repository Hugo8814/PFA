import iconPot from "../../../Temp/assets/images/icon-pot.svg";
import SubTitle from "./SubTitle";
import breadIcon from "../../../Temp/assets/images/avatars/savory-bites-bistro.jpg";
import BudgetChart from "../budgets/BudgetChart";
import Pots from "../pots/pots";

function OverviewPage() {
  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
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
          <h3 className="text-gray-400 text-2xl ml-2">Expenses</h3>
          <div className="font-bold text-5xl">$1,700.50</div>
        </div>
      </div>
      <div className="w-full h-full flex gap-8">
        <div className="flex flex-col gap-4 w-full ">
          <div className="flex bg-white rounded-xl  w-full flex-col p-8 ">
            <SubTitle>Pots</SubTitle>
            <div className="flex  gap-5 ">
              <div className="flex gap-6 bg-  bg-[#F8F4F0] w-[85%] rounded-xl p-8">
                <img src={iconPot} alt="money jar icon" className="w-14" />
                <div className="space-y-4">
                  <div className="text-gray-400">Total Saved</div>
                  <div className="text-6xl font-bold">$0</div>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gird-rows-2 gap-4">
                <div className=" w-full flex ">
                  <span className=" h-[full] w-2 rounded-xl bg-green-700 mr-6"></span>
                  <div>
                    <p className="text-gray-400 text-xl">car</p>
                    <p className="text-3xl font-bold">$104</p>
                  </div>
                </div>

                <div className=" w-full flex ">
                  <span className=" h-[full] w-2 rounded-xl bg-blue-900 mr-6"></span>
                  <div>
                    <p className="text-gray-400 text-xl">car</p>
                    <p className="text-3xl font-bold">$38</p>
                  </div>
                </div>
                <div className=" w-full flex ">
                  <span className=" h-[full] w-2 rounded-xl bg-yellow-300 mr-6"></span>
                  <div>
                    <p className="text-gray-400 text-xl">car</p>
                    <p className="text-3xl font-bold">$49</p>
                  </div>
                </div>
                <div className=" w-full flex ">
                  <span className=" h-[full] w-2 rounded-xl bg-red-700 mr-6"></span>
                  <div>
                    <p className="text-gray-400 text-xl">car</p>
                    <p className="text-3xl font-bold">$468</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-white rounded-xl  flex-col p-8">
            <SubTitle>Transactions</SubTitle>
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
            <SubTitle>Budgets</SubTitle>

            <div className="flex gap-6 justify-between ">
              <div className="ml-[20%] relative text-center">
                <p className="text-6xl font-bold absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  $338
                  <p className="text-gray-500 text-lg">of $845 limit</p>
                </p>
                <BudgetChart />
              </div>

              <Pots></Pots>
            </div>
          </div>
          <div className="flex bg-white rounded-md h-full w-full flex-col gap-4">
            <SubTitle>Recurring Bills</SubTitle>

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
