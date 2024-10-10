import Header from "../../ui/Header";
import { formatCurrency, formatDate } from "../../utils/helpers";
import downArrow from "../../../assets/images/icon-caret-down.svg";
import iconCaretLeft from "../../../assets/images/icon-caret-left.svg";
import iconCaretRight from "../../../assets/images/icon-caret-right.svg";
import { useSelector } from "react-redux";

import { getTransactions } from "./transactionSlice";
import { useState } from "react";

function TransactionsPage() {
  const transactions = useSelector(getTransactions);
  const [searchTrem, setSearchTerm] = useState("");
  const [isdropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Latest");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchTrem.toLowerCase())
  );

  function handleDropdown() {
    setIsDropdownOpen(!isdropdownOpen);
  }
  const handleSortBy = (sortOption) => {
    setSortBy(sortOption); // Update the selected sort value
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <div>
        <Header title="Transactions" btn={true} text="+Add New Transaction" />
      </div>

      <div className="flex bg-white rounded-xl   p-14 flex-col">
        <div className="flex pb-10">
          <div className="flex mr-auto">
            <input
              type="text"
              placeholder="Search transactions"
              className="border-gray-500 border-[1px] pr-72 pl-6 py-4 rounded-xl text-2xl "
              onChange={(e) => handleSearchChange(e)}
            />
          </div>

          <div className="flex gap-12">
            <div className="flex gap-6 items-center      ">
              <p type="dropdown" className="text-2xl text-gray-600">
                sort by
              </p>
              <div className="h-full relative space-y-3 text-2xl">
                <button
                  onClick={() => handleDropdown()}
                  className="border-gray-500 border-[1px] px-6 rounded-xl h-full flex items-center gap-24  justify-between font-semibold"
                >
                  {sortBy}
                  <img src={downArrow} alt="" />
                </button>
                {isdropdownOpen && (
                  <div className="absolute w-full bg-white rounded-xl   z-10 border-gray-500 border-[1px] ">
                    <div
                      onClick={() => handleSortBy("Latest")}
                      className="hover:bg-gray-200 pl-6 py-4"
                    >
                      Latest
                    </div>
                    <div
                      onClick={() => handleSortBy("Oldest")}
                      className="hover:bg-gray-200 pl-6 py-4"
                    >
                      Oldest
                    </div>
                    <div
                      onClick={() => handleSortBy("A to Z")}
                      className="hover:bg-gray-200 pl-6 py-4"
                      value="A to Z"
                    >
                      A to Z
                    </div>
                    <div
                      onClick={() => handleSortBy("Z to A")}
                      className="hover:bg-gray-200 pl-6 py-4"
                      value="Z to A"
                    >
                      Z to A
                    </div>
                    <div
                      onClick={() => handleSortBy("Highest")}
                      className="hover:bg-gray-200 pl-6 py-4"
                      value="Highest"
                    >
                      Highest
                    </div>
                    <div
                      onClick={() => handleSortBy("Lowest")}
                      className="hover:bg-gray-200 pl-6 py-4"
                      value="Lowest"
                    >
                      Lowest
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-6 items-center ">
              <p className="text-2xl text-gray-600">Category</p>

              <div className="border-gray-500 border-[1px] px-6 rounded-xl h-full flex items-center gap-10 text-2xl justify-between">
                <select
                  className="bg-transparent focus: outline-none px-6 rounded-xl h-full flex items-center gap-3
            text-2xl  justify-around font-semibold  "
                >
                  All Transactions
                  <option className="" value="recurring">
                    All Transactions
                  </option>
                  <option value="oldest">Entertainment</option>
                  <option value="most-popular">Bills</option>
                  <option value="most-popular">Groceries</option>
                  <option value="most-popular">Dining Out</option>
                  <option value="most-popular">Transportation</option>
                  <option value="most-popular">Personal Care</option>
                  <option value="most-popular">Education</option>
                  <option value="most-popular">Lifestyle</option>
                  <option value="most-popular">General</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th className="text-2xl font-normal text-gray-500 text-left p-6">
                Recipent / Sender
              </th>
              <th className="text-2xl font-normal text-gray-500 text-left">
                Category
              </th>
              <th className="text-2xl font-normal text-gray-500 text-left">
                Transaction Date
              </th>
              <th className="text-2xl font-normal text-gray-500 text-right">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions &&
              filteredTransactions.map((item, index) => (
                <tr key={index} className="border-t ">
                  <td className="text-2xl font-normal flex items-center p-6">
                    <img
                      src={item.avatar}
                      className="w-14 rounded-full"
                      alt="icon"
                    />
                    <p className="pl-4 font-bold ">{item.name}</p>
                  </td>
                  <td className="text-2xl font-normal text-gray-500">
                    {item.category}
                  </td>
                  <td className="text-2xl font-normal text-gray-500">
                    {formatDate(item.date)}
                  </td>
                  <td
                    style={{ color: item.amount < 0 ? "red" : "green" }}
                    className="text-2xl  text-green-700 font-bold text-right"
                  >
                    {formatCurrency(item.amount)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

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
  );
}

export default TransactionsPage;
