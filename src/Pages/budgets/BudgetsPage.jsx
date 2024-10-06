import { Link } from "react-router-dom";
import Header from "../../ui/Header";
import iconCaretRight from "../../../assets/images/icon-caret-right.svg";
import icon from "../../../assets/images/avatars/elevate-education.jpg";

import { useSelector } from "react-redux";
import {
  getBugetDataOverview,
  getBugetTotal,
  selectTransactions,
} from "../overview/overviewSlice";
import { formatCurrency, formatDate } from "../../utils/helpers";
import Summary from "./Summary";
import { getBudgetData } from "./budgetSlice";

function BudgetsPage() {
  const transactions = useSelector(selectTransactions);
  const budgetData = useSelector(getBugetDataOverview);
  const budgetTotal = useSelector(getBugetTotal);
  const budgetTransactions = useSelector(getBudgetData);

  console.log(budgetTransactions);
  const data = budgetData.map((item) => ({
    name: item.category, // Label for the pie slice
    value: item.maximum, // Value for the pie slice
    theme: item.theme, // Color for the pie slice
  }));

  //for the git 3
  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <Header title="Budgets" btn={true} text="+Add New Budget" />

      <div className="flex gap-8">
        <Summary
          budgetTotal={budgetTotal}
          data={data}
          budgetData={budgetData}
        />
        <div className="flex flex-col w-full gap-10">
          {budgetData &&
            budgetData.map((item, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-2xl p-10 h-full flex flex-col gap-8"
              >
                <div className="flex justify-between p-4 w-full">
                  <div className="flex gap-4 items-center">
                    <span
                      style={{ backgroundColor: item.theme }}
                      className="w-8 h-8 rounded-full"
                    ></span>
                    <div className="text-4xl font-bold">{item.category}</div>
                  </div>
                  <button className="text-gray-900 text-4xl font-bold">
                    ...
                  </button>
                </div>

                <p className="text-2xl p-4">
                  Maximum of {formatCurrency(item.maximum)}
                </p>

                <div className="w-full bg-[#F8F4F0] h-12 rounded-md ">
                  <div
                    // style={{ width: `${(item.current / item.maximum) * 100}%` }}
                    style={{ backgroundColor: item.theme }}
                    className="w-2/3  h-12 rounded-md"
                  ></div>
                </div>

                <div
                  style={{ borderColor: item.theme }}
                  className=" my-8   w-full flex  justify-between border-l-4  "
                >
                  <div className="  w-full  px-6">
                    <p className="text-gray-500 text-2xl  ">Spent</p>
                    <p className="text-gray-800 text-2xl font-bold ">
                      TEMP-DATA
                      {/* {item.current} */}
                    </p>
                  </div>

                  <div className=" items-baseline gap-2 w-full h-full border-l-4 border-[#F8F4F0] px-6">
                    <p className="text-gray-500 text-2xl  ">Reamaining</p>

                    <p className="text-gray-800 text-2xl font-bold">
                      TEMP-DATA
                      {/* {item.maximum - $item.current`} */}
                    </p>
                  </div>
                </div>
                <div className="bg-[#F8F4F0]  rounded-xl">
                  <div className="flex justify-between p-5 w-full">
                    <div className="text-3xl font-bold">Latest Spending</div>
                    <Link
                      to="/Transactions"
                      className="text-gray-500 text-2xl flex "
                    >
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
                  {transactions &&
                    transactions
                      .map((item, index) => (
                        <div key={index} className="flex justify-between p-6">
                          <div className="flex gap-4 items-center ">
                            <img
                              src={item.avatar}
                              alt=""
                              className="w-16 rounded-full"
                            />
                            <p className="text-2xl font-bold">{item.name}</p>
                          </div>
                          <div className="space-y-2 flex flex-col items-end">
                            <div
                              className="text-2xl font-bold text-green-700"
                              style={{
                                color: item.amount > 0 ? "green" : "red",
                              }}
                            >
                              {formatCurrency(item.amount)}
                            </div>
                            <div className="text-gray-500 text-xl">
                              {formatDate(item.date)}
                            </div>
                          </div>
                        </div>
                      ))
                      .slice(0, 2)}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BudgetsPage;
