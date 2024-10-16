import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./modalSlice";
import { useState } from "react";
import downArrow from "../../assets/images/icon-caret-down.svg";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { addTransaction } from "../Pages/transactions/transactionSlice";

function AddNewTransaction() {
  const { isAddTransactionOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(""); // Default color
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const maxLength = 20; // Set the maximum character length
  const charactersLeft = maxLength - transactionName.length; // Calculate remaining characters
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [recurring, setRecurring] = useState(false);

  const categories = [
    "Entertainment",
    "Bills",
    "Groceries",
    "Dining out",
    "Transportation",
    "Personal Care",
    "Education",
    "Lifestyle",
    "Shopping",
    "General",
  ];
  function handleSubmit() {
    if (!transactionName || !amount || !selectedCategory) {
      alert("Please fill in all fields.");
      return;
    }

    const newData = {
      id: Date.now(),
      name: transactionName,
      category: selectedCategory,
      amount: Number(amount), // Ensure amount is a number
      date: selectedDate, // Include the date
      recurring: recurring,
      avatar: "./assets/images/avatars/elevate-education.jpg",
    };

    // Dispatch action to add transaction
    dispatch(addTransaction(newData));
    setTransactionName("");
    setAmount(0);
    setSelectedCategory("");
    setSelectedDate(new Date());

    dispatch(closeModal());
  }

  if (!isAddTransactionOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 ">
      <div className="bg-white p-16 rounded-[2rem] w-[30%] h-content flex flex-col gap-10">
        <div className=" flex justify-between items-center">
          <div className="text-5xl font-bold">Add New Transaction</div>
          <div onClick={() => dispatch(closeModal())} className="text-6xl ">
            &times;
          </div>
        </div>

        <div>
          <div className="text-gray-500 text-2xl  font-semibold">
            Transaction Name
          </div>
          <div className="flex items-center border rounded-2xl py-3 px-5 border-gray-900">
            <input
              onChange={(e) => setTransactionName(e.target.value)}
              type="text"
              maxLength={20}
              className="w-full foucus: outline-none border-none pr-37 pl-6 py-2 rounded-xl text-3xl"
              placeholder="e.g Rainy Days"
            />
          </div>
          <div className=" w-full text-right text-gray-500 text-xl">
            {charactersLeft} Letters Left
          </div>
        </div>

        <div className="">
          <div className="text-gray-500 text-2xl font-semibold  ">
            Transaction Date
          </div>
          <div className="flex items-center  rounded-2xl  relative bg-[#F6F6F6]">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-gray-500 flex items-center foucus: outline-none border-none rounded-xl text-2xl text-left"
            >
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMMM d, yyyy"
                dropdownMode="select"
                className="w-full focus:outline-none bg-inherit border-none pr-96 pl-6 py-6 rounded-xl text-[1.7rem]"
                calendarClassName="scale-150"
                withPortal
              />

              <img className="ml-auto p-5" src={downArrow} alt="" />
            </button>
          </div>
        </div>

        <div>
          <div className="text-gray-500 text-2xl font-semibold ">Category</div>
          <div className="flex items-center border rounded-2xl py-3 px-5 border-gray-900 relative">
            <button
              onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
              className="w-full text-gray-500 flex items-center foucus: outline-none border-none pr-37 pl-6 py-3 rounded-xl text-2xl text- "
            >
              {selectedCategory || "Select Category"}
              <img className="ml-auto" src={downArrow} alt="" />
            </button>

            {isDropdownOpen2 && (
              <div className="h-full space-y-3 text-2xl">
                {isDropdownOpen2 && (
                  <div className="absolute left-0 top-[6rem]  w-full bg-white rounded-xl   z-10 border-gray-500 border-[1px]  ">
                    <div className="overflow-y-scroll h-[20rem]">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedCategory(category);

                            setIsDropdownOpen2(!isDropdownOpen2);
                          }}
                          className="hover:bg-gray-200 pl-6 py-4 flex gap-5 cursor-pointer"
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="text-gray-500 text-2xl font-semibold ">Amount</div>
          <div className="flex items-center border rounded-2xl py-3 px-5 border-gray-900">
            <span className="text-gray-500 text-2xl ">$</span>
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              value={amount}
              className="w-full foucus: outline-none border-none pr-37 pl-6 py-3 rounded-xl text-2xl"
              placeholder="e.g $2000"
            />
          </div>
        </div>
        <div className="text-gray-500 text-3xl font-semibold  flex items-center">
          Recurring
          <input
            onChange={(e) => setRecurring(e.target.checked)}
            type="checkbox"
            className="ml-5 mt-2 "
          />
        </div>

        <button
          onClick={() => {
            handleSubmit();
          }}
          className="flex justify-center items-center bg-black text-white text-3xl font-semibold p-6 rounded-xl"
        >
          Confirm Addition
        </button>
      </div>
    </div>
  );
}

export default AddNewTransaction;
