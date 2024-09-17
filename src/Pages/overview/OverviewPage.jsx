import { Link } from "react-router-dom";
import iconCaretRight from "../../../Temp/assets/images/icon-caret-right.svg";

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
      <div className="w-full h-full flex">
        <div className="flex flex-col w-full max-w-[60rem] h-[20rem] bg-white p-8">
          <div className="flex justify-between">
            <div className="text-3xl font-bold">Pots</div>
            <Link to="/pots" className="text-gray-500 text-2xl ">
              See Details <img src={iconCaretRight} alt="Right arrow" />
            </Link>
          </div>
          <div className="flex-1 mt-4"> {/* Add content here */} </div>
        </div>
        <div className="flex-1 ml-12 flex flex-col gap-4">
          <div className="bg-gray-200 rounded-lg h-full">
            {" "}
            {/* Add content here */}{" "}
          </div>
          <div className="bg-gray-200 rounded-lg h-full">
            {" "}
            {/* Add content here */}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
