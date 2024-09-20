import Header from "../../ui/Header";
import breadIcon from "../../../Temp/assets/images/avatars/savory-bites-bistro.jpg";
import downArrow from "../../../Temp/assets/images/icon-caret-down.svg";
import iconCaretLeft from "../../../Temp/assets/images/icon-caret-left.svg";
import iconCaretRight from "../../../Temp/assets/images/icon-caret-right.svg";
import BillsIcon from "../../../Temp/assets/images/icon-recurring-bills.svg";

function RecurringBillsPage() {
  //long day
  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <Header title="Recurring Bills" />

      <div className="flex gap-10">
        <div className="w-[35%] space-y-10">
          <div className="bg-black w-full text-white rounded-xl p-10 space-y-12">
            <img src={BillsIcon} alt="BillsIcon" className="w-16" />
            <p className="text-3xl font-semibold">Total Bills</p>
            <p className="text-6xl font-bold">$344.45</p>
          </div>
          <div className="bg-white p-6">
            <h4 className="text-3xl font-semibold p-4">Summary</h4>
            <div className="flex justify-between p-4 border-t-[1px]">
              <div className="text-xl text-gray-600">Paid Bills</div>
              <div className="text-xl text-gray-900 font-bold">
                {"4($190.00)"}
              </div>
            </div>
            <div className="flex justify-between p-4 border-t-[1px]">
              <div className="text-xl text-gray-600">Car payment</div>
              <div className="text-xl text-gray-900 font-bold">
                {"4($890.00)"}
              </div>
            </div>
            <div className="flex justify-between p-4 border-t-[1px]">
              <div className="text-xl text-gray-600">Paid Bills</div>
              <div className="text-xl text-gray-900 font-bold">
                {"4($190.00)"}
              </div>
            </div>
          </div>
        </div>
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
              <tr className="border-t ">
                <td className="text-2xl font-normal flex items-center p-6">
                  <img
                    src={breadIcon}
                    className="w-14 rounded-full"
                    alt="icon"
                  />
                  <p className="pl-4 font-bold ">Car</p>
                </td>
                <td className="text-2xl font-normal text-gray-500">
                  Car payment
                </td>
                <td className="text-2xl font-normal text-gray-500">
                  19/04/2021
                </td>
                <td className="text-2xl  text-green-700 font-bold text-right">
                  + 68.53
                </td>
              </tr>

              <tr className="border-t ">
                <td className="text-2xl font-normal flex items-center p-6">
                  <img
                    src={breadIcon}
                    className="w-14 rounded-full"
                    alt="icon"
                  />
                  <p className="pl-4 font-bold ">Car</p>
                </td>
                <td className="text-2xl font-normal text-gray-500">
                  Car payment
                </td>
                <td className="text-2xl font-normal text-gray-500">
                  19/04/2021
                </td>
                <td className="text-2xl  text-green-700 font-bold text-right">
                  + 68.53
                </td>
              </tr>
              <tr className="border-t ">
                <td className="text-2xl font-normal flex items-center p-6">
                  <img
                    src={breadIcon}
                    className="w-14 rounded-full"
                    alt="icon"
                  />
                  <p className="pl-4 font-bold ">Car</p>
                </td>
                <td className="text-2xl font-normal text-gray-500">
                  Car payment
                </td>
                <td className="text-2xl font-normal text-gray-500">
                  19/04/2021
                </td>
                <td className="text-2xl  text-green-700 font-bold text-right">
                  + 68.53
                </td>
              </tr>
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
    </div>
  );
}

export default RecurringBillsPage;
