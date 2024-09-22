import { Link } from "react-router-dom";
import Header from "../../ui/Header";
import iconCaretRight from "../../../Temp/assets/images/icon-caret-right.svg";
import icon from "../../../Temp/assets/images/avatars/elevate-education.jpg";

import BudgetChart from "./BudgetChart";

function BudgetsPage() {
  //for the git
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

          <div className=" grid grid-cols gird-rows-4 gap-8 p-8">
            <div className=" p-3 w-full flex  justify-between border-l-4 border-blue-700 ">
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

        <div className="w-full bg-white rounded-2xl p-10 h-full flex flex-col gap-8">
          <div className="flex justify-between p-4 w-full">
            <div className="flex gap-4 items-center">
              <span className="bg-blue-700 w-8 h-8 rounded-full"></span>
              <div className="text-4xl font-bold">Car</div>
            </div>
            <button className="text-gray-900 text-4xl font-bold">...</button>
          </div>

          <p className="text-2xl p-4">Maximum of $200.00</p>

          <div className="w-full bg-[#F8F4F0] h-12 rounded-md ">
            <div className="w-2/3 bg-blue-700 h-12 rounded-md"></div>
          </div>

          <div className=" my-8   w-full flex  justify-between border-l-4 border-blue-600 ">
            <div className="  w-full  px-6">
              <p className="text-gray-500 text-2xl  ">Spent</p>
              <p className="text-gray-800 text-2xl font-bold ">$104</p>
            </div>

            <div className=" items-baseline gap-2 w-full h-full border-l-4 border-[#F8F4F0] px-6">
              <p className="text-gray-500 text-2xl  ">Reamaining</p>
              <p className="text-gray-800 text-2xl font-bold">$96</p>
            </div>
          </div>
          <div className="bg-[#F8F4F0]  rounded-xl">
            <div className="flex justify-between p-5 w-full">
              <div className="text-3xl font-bold">Latest Spending</div>
              <Link to="/Transactions" className="text-gray-500 text-2xl flex ">
                See Details{" "}
                <img
                  src={iconCaretRight}
                  alt="Right arrow"
                  className="w-2 ml-4"
                />
              </Link>
            </div>

            <div className="flex justify-between p-6">
              <div className="flex gap-4 items-center ">
                <img src={icon} alt="" className="w-16 rounded-full" />
                <p className="text-2xl font-bold">Car payment</p>
              </div>
              <div className="  text-end space-y-2">
                <div className="text-2xl font-bold text-green-700">
                  +$399.50
                </div>
                <div className="text-gray-500 text-xl">19 Jul 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetsPage;
