import Header from "../../ui/Header";

import downArrow from "../../../assets/images/icon-caret-down.svg";
import iconCaretLeft from "../../../assets/images/icon-caret-left.svg";
import iconCaretRight from "../../../assets/images/icon-caret-right.svg";
import TotalBills from "./TotalBills";
import RecTable from "./RecTable";
import { useSelector } from "react-redux";
import { getRecurringData } from "../overview/overviewSlice";

function RecurringBillsPage() {
  const data = useSelector(getRecurringData); // Get recurring transactions

  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <Header title="Recurring Bills" />

      <div className="flex gap-10">
        <TotalBills />

        <div className="flex bg-white rounded-xl w-full   p-14 flex-col">
          <div className="flex pb-10 justify-between">
            <div className="flex ">
              <input
                type="text"
                placeholder="Search transactions"
                className="border-gray-500 border-[1px] pr-37 pl-6 py-4 rounded-xl text-2xl "
              />
            </div>

            <div className="flex gap-6 items-center ">
              <p className="text-2xl text-gray-600">sort by</p>
              <button
                className="border-gray-500 border-[1px] px-8 rounded-xl h-full flex items-center gap-6
            text-2xl"
              >
                Latest
                <img src={downArrow} alt="downArrow" />
              </button>
            </div>
          </div>

          <RecTable data={data} />

          <div className="flex justify-between mt-14 items-center">
            <button className="border-gray-500 border-[1px] py-4  px-6 rounded-xl h-full flex items-center gap-6 text-2xl">
              <img src={iconCaretLeft} alt="" />
              Prev
            </button>
            <div className=" flex justify-center items-center">
              <button className="border-gray-500 bg-black  text-white font-bold border-[1px] py-3 px-5  rounded-xl h-[80%]   text-2xl flex items-center">
                1
              </button>
            </div>
            <button className="border-gray-500 border-[1px] py-4 px-6 rounded-xl h-full flex items-center gap-6 text-2xl">
              Next
              <img src={iconCaretRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecurringBillsPage;
