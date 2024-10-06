import Header from "../../ui/Header";
import { formatCurrency, formatDate } from "../../utils/helpers";
import downArrow from "../../../assets/images/icon-caret-down.svg";
import iconCaretLeft from "../../../assets/images/icon-caret-left.svg";
import iconCaretRight from "../../../assets/images/icon-caret-right.svg";
import { useSelector } from "react-redux";
import { selectTransactions } from "../overview/overviewSlice";

function TransactionsPage() {
  const data = useSelector(selectTransactions);
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
            />
          </div>

          <div className="flex gap-12">
            <div className="flex gap-6 items-center ">
              <p className="text-2xl text-gray-600">sort by</p>
              <button
                className="border-gray-500 border-[1px] px-8 rounded-xl h-full flex items-center gap-6
            text-2xl "
              >
                Latest
                <img src={downArrow} alt="downArrow" />
              </button>
            </div>
            <div className="flex gap-6 items-center ">
              <p className="text-2xl text-gray-600">Category</p>
              <button
                className="border-gray-500 border-[1px] px-8 rounded-xl h-full flex items-center gap-6
            text-2xl "
              >
                All Tansactions
                <img src={downArrow} alt="downArrow" />
              </button>
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
            {data &&
              data
                .map((item, index) => (
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
                ))
                .slice(0, 7)}
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
