import Header from "../../ui/Header";

import downArrow from "../../../assets/images/icon-caret-down.svg";

import TotalBills from "./TotalBills";
import RecTable from "./RecTable";
import { useSelector } from "react-redux";

import { useState } from "react";
import { getTransactions } from "../transactions/transactionSlice";

function RecurringBillsPage() {
  const data = useSelector(getTransactions);

  const RecurringData = [...data].filter((item) => item.recurring);
  console.log(RecurringData);

  const [searchTerm, setSearchTerm] = useState("");

  const [isdropdownOpen, setIsdropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Highest");

  const filteredTransactions = RecurringData.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDropdown = () => {
    setIsdropdownOpen(!isdropdownOpen);
  };

  const handleSortBy = (sortOption) => {
    setSortBy(sortOption); // Update the selected sort value

    setIsdropdownOpen(false); // Close the dropdown after selection
  };
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    switch (sortBy) {
      case "Highest":
        return a.amount - b.amount;

      case "Lowest":
        return b.amount - a.amount;
      case "A to Z":
        return a.name.localeCompare(b.name); // Sort by name A to Z
      case "Z to A":
        return b.name.localeCompare(a.name); // Sort by name Z to A

      default:
        return 0;
    }
  });

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
                className="border-gray-500 border-[1px] pr-72 pl-6 py-4 rounded-xl text-2xl "
                onChange={(e) => handleSearchChange(e)}
              />
            </div>
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
          </div>

          <RecTable data={sortedTransactions} perPage={8} />
        </div>
      </div>
    </div>
  );
}

export default RecurringBillsPage;
